from queries.pool import pool
from models.trip_notes import TripNoteIn, TripNoteOut
from typing import List, Union
from models.trips import Error


class TripNoteQueries:
    #### ALLOWS FOR GET REQUEST OF ONE TRIPNOTE INSTANCE ####
    def get_one_note(
        self, account_id: int, trip_id: int, note_id: int
    ) -> TripNoteOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, trip_id, account_id, title, description
                        FROM tripnotes
                        WHERE account_id = %s AND trip_id = %s AND id = %s
                        """,
                        [account_id, trip_id, note_id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_trip_note_out(record)
        except Exception as e:
            print(e)
            return {"message": "Trip Note Could Not Be Found"}

    ### ALLOWS GET REQUEST FOR ALL TRIPNOTES AS A LIST ####
    def get_all_notes(
        self, account_id: int, trip_id: int
    ) -> Union[Error, List[TripNoteOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                            SELECT id, trip_id, account_id, title, description
                            FROM tripnotes
                            WHERE account_id = %s AND trip_id = %s
                            ORDER BY trip_id;
                            """,
                        [account_id, trip_id],
                    )
                    return [
                        self.record_to_trip_note_out(record)
                        for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message": "Could not get all trip notes"}

    #### ALLOWS USER TO POST A TRIPNOTE ####
    def create_note(
        self, account_id: int, trip_note: TripNoteIn
    ) -> TripNoteOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO tripnotes
                        (title, description, account_id, trip_id)
                    VALUES
                        (%s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [
                        trip_note.title,
                        trip_note.description,
                        account_id,
                        trip_note.trip_id,
                    ],
                )
                print("info", trip_note)
                note_id = result.fetchone()[0]
                print("note_id", note_id)
                return self.trip_note_in_to_out(account_id, note_id, trip_note)

    #### ALLOWS FOR DELETE REQUEST OF A TRIPNOTE INSTANCE ####
    def delete(self, account_id: int, note_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM tripnotes
                        WHERE id = %s AND account_id = %s
                        """,
                        [note_id, account_id],
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    #### ALLOWS FOR RECEIPT OF A TRIPNOTE POSTED BY USER AND ASSIGNS FURTHER INPUTS ASSIGNED BY DATABASE ####
    def trip_note_in_to_out(
        self, account_id, note_id: int, note: TripNoteIn
    ) -> TripNoteOut:
        old_data = note.dict()
        return TripNoteOut(account_id=account_id, id=note_id, **old_data)

    #### ALLOWS FOR RETURN OF TRIPNOTE INSTANCE WITHOUT POSTING VIA TRIPNOTE IN ####
    def record_to_trip_note_out(self, record):
        return TripNoteOut(
            id=record[0],
            trip_id=record[1],
            account_id=record[2],
            title=record[3],
            description=record[4],
        )
