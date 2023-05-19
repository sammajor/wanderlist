from queries.pool import pool
from models.trip_notes import TripNoteIn, TripNoteOut
from typing import List, Union
from models.trips import Error

class TripNoteQueries:

    def get_one_note(self, id: int, trip_id: int) -> TripNoteOut:

        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT id, trip_id, title, description
                    FROM tripnotes
                    WHERE id = %s
                    , trip_id = %s
                    """,
                    [id],
                    [trip_id],
                )
                record = result.fetchone()
                if record is None:
                    return None
                return self.record_to_trip_note_out(record)

    def get_all(self) -> Union[Error, List[TripNoteOut]]:
            try:
                with pool.connection() as conn:
                    with conn.cursor() as db:
                        result = db.execute(
                            """
                            SELECT id, trip_id, title, description
                            FROM tripnotes
                            ORDER BY trip_id;
                            """
                        )
                        return [self.record_to_trip_note_out(record) for record in result]
            except Exception as e:
                print(e)
                return {"message": "Could not get all trip notes"}

    def create(self, info: TripNoteIn, trip_id: int) -> TripNoteOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO tripnotes
                        (trip_id, title, description)
                    VALUES
                        (%s, %s, %s)
                    RETURNING id;
                    """,
                    [
                        trip_id,
                        info.title,
                        info.description,
                    ],
                )
                id = result.fetchone()[0]
                return self.trip_note_in_to_out(id, info, trip_id)

    def delete(self, id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM tripnotes
                        WHERE id = %s
                        """,
                        [id],
                    )
                    return True
        except Exception as e:
            return False

    def trip_note_in_to_out(self, id: int, trip_id: TripNoteIn):
        old_data = trip_id.dict()
        return TripNoteOut(id=id, **old_data)

    def record_to_trip_note_out(self, record):
        return TripNoteOut(
            id=record[0],
            trip_id=record[1],
            title=record[2],
            description=record[3],
        )
