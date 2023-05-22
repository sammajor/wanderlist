from queries.pool import pool
from models.trip_notes import TripNoteIn, TripNoteOut
from typing import List, Union
from models.trips import Error

class TripNoteQueries:

    def get_one_note(self, account_id: int, trip_id: int, note_id: int) -> TripNoteOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT note_id, trip_id, account_id, title, description
                        FROM tripnotes
                        WHERE account_id = %s AND trip_id = %s AND note_id = %s
                        """,
                        [account_id, trip_id, note_id]
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_trip_note_out(record)
        except Exception as e:
            print(e)
            return {"message": "Trip Note Could Not Be Found"}

    def get_all_notes(self, account_id: int, trip_id: int) -> Union[Error, List[TripNoteOut]]:
            try:
                with pool.connection() as conn:
                    with conn.cursor() as db:
                        result = db.execute(
                            """
                            SELECT note_id, trip_id, account_id, title, description
                            FROM tripnotes
                            WHERE account_id = %s AND trip_id = %s
                            ORDER BY trip_id;
                            """,
                            [account_id, trip_id]
                        )
                        return [self.record_to_trip_note_out(record) for record in result]
            except Exception as e:
                print(e)
                return {"message": "Could not get all trip notes"}

    def create_note(self, info: TripNoteIn) -> TripNoteOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO tripnotes
                        (title, description, account_id, trip_id)
                    VALUES
                        (%s, %s, %s, %s)
                    RETURNING note_id;
                    """,
                    [
                        info.title,
                        info.description,
                        info.account_id,
                        info.trip_id
                    ],
                )
                print("info", info)
                note_id = result.fetchone()[0]
                print("note_id", note_id)
                return self.trip_note_in_to_out(note_id, info)

    def delete(self, note_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM tripnotes
                        WHERE note_id = %s
                        """,
                        [note_id],
                    )
                    return True
        except Exception as e:
            return False

    def trip_note_in_to_out(self, note_id: int, note: TripNoteIn):
        old_data = note.dict()
        return TripNoteOut(note_id=note_id, **old_data)

    def record_to_trip_note_out(self, record):
        return TripNoteOut(
            note_id=record[0],
            trip_id=record[1],
            account_id=record[2],
            title=record[3],
            description=record[4],
        )
