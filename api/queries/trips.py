from queries.pool import pool
from models.trips import TripIn, TripOut
from typing import List, Union
from models.trips import Error

class TripQueries:

    def get_one_trip(self, trip_id: int, account_id: int) -> TripOut:

        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT trip_id, account_id, start_date, end_date, park
                    FROM trips
                    WHERE trip_id = %s AND account_id = %s
                    """,
                    [trip_id, account_id]
                )
                record = result.fetchone()
                if record is None:
                    return None
                return self.record_to_trip_out(record)

    def get_all_trips(self) -> Union[Error, List[TripOut]]:
            try:
                with pool.connection() as conn:
                    with conn.cursor() as db:
                        result = db.execute(
                            """
                            SELECT trip_id, account_id, start_date, end_date, parks
                            FROM trips
                            ORDER BY start_date;
                            """
                        )
                        return [self.record_to_trip_out(record) for record in result]
            except Exception as e:
                print(e)
                return {"message": "Could not get all trips"}

    def create(self, info: TripIn) -> TripOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO trips
                        (account_id, start_date, end_date, park)
                    VALUES
                        (%s, %s, %s, %s)
                    RETURNING trip_id;
                    """,
                    [
                        info.account_id,
                        info.start_date,
                        info.end_date,
                        info.park,
                    ],
                )
                id = result.fetchone()[0]
                return self.trip_in_to_out(id, info)

    def trip_in_to_out(self, trip_id: int, trip: TripIn):
        old_data = trip.dict()
        print(old_data)
        return TripOut(trip_id=trip_id, **old_data)

    def record_to_trip_out(self, record):
        return TripOut(
            trip_id=record[0],
            account_id =record[1],
            start_date=record[2],
            end_date=record[3],
            park=record[4],
        )
