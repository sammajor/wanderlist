from queries.pool import pool
from models.trips import TripIn, TripOut
from typing import List, Union
from models.trips import Error


class TripQueries:
#### ALLOWS GET REQUEST FOR ONE TRIP ####
    def get_one_trip(self, account_id: int, trip_id: int) -> TripOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id,
                        account_id,
                        start_date,
                        end_date,
                        park,
                        trip_status
                        FROM trips
                        WHERE id = %s AND account_id = %s
                        """,
                        [trip_id, account_id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_trip_out(record)
        except Exception as e:
            print(e)
            return {"message": "Trip Could Not Be Found"}

#### ALLOWS GET REQUEST FOR LIST OF ALL TRIPS ####
    def get_all_trips(self, account_id: int) -> Union[Error, List[TripOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id,
                        account_id,
                        start_date,
                        end_date,
                        park,
                        trip_status
                        FROM trips
                        WHERE account_id = %s
                        ORDER BY start_date;
                        """,
                    [account_id],
                )
                    return [self.record_to_trip_out(record) for record in result]
            return [self.record_to_trip_out(record) for record in result]
        except Exception as e:
            print(e)
            return {"message": "Could not get all trips"}

#### ALLOWS POST REQUEST FOR A NEW TRIP INSTANCE ####
    def create(self, account_id: int, trip: TripIn) -> TripOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO trips
                        (account_id, start_date, end_date, park)
                    VALUES
                        (%s, %s, %s, %s)
                    RETURNING id,
                    account_id,
                    start_date,
                    end_date,
                    park,
                    trip_status;
                    """,
                    [
                        account_id,
                        trip.start_date,
                        trip.end_date,
                        trip.park,
                    ],
                )

                record = result.fetchone()
                return self.record_to_trip_out(record)

#### ALLOWS PUT REQUEST TO UPDATE TRIP STATUS FROM PENDING TO EITHER 'COMPLETED' OR 'CANCELLED' ####
    def update_trip_status(self, trip_id: int, trip_status: str) -> TripOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE trips
                        SET trip_status = CAST(%s AS trip_status_enum)
                        WHERE id = %s;
                        """,
                        [
                            trip_status,
                            trip_id,
                        ],
                    )
                    result = db.execute(
                        """
                        SELECT id,
                        account_id,
                        start_date,
                        end_date,
                        park,trip_status
                        FROM trips
                        WHERE id = %s
                        """,
                        [trip_id],
                    )
                    trip_record = result.fetchone()
                    return self.record_to_trip_out(trip_record)
        except Exception as e:
            print(e)
            return {"message": "Could not update this trip"}

#### RECEIVES USER POST REQUEST AND DATABASE ASSIGNS FURTHER VALUES ####
    def trip_in_to_out(self, account_id: int, trip_id: int, trip: TripIn):
        old_data = trip.dict()
        return TripOut(account_id=account_id, id=trip_id, **old_data)

#### ALLOWS FOR RETURN OF TRIP INSTANCE WITHOUT POSTING VIA TRIP IN ####
    def record_to_trip_out(self, record):
        return TripOut(
            id=record[0],
            account_id=record[1],
            start_date=record[2],
            end_date=record[3],
            park=record[4],
            trip_status=record[5],
        )
