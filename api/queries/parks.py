from queries.pool import pool
from models.parks import ParkOut
from typing import List
import json

class ParkQueries:

    def get_all_parks(self) -> List[ParkOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id,
                        full_name,
                        city,
                        state,
                        description,
                        park_url,
                        park_id,
                        park_code,
                        activities
                        FROM parks
                        """
                    )
                    result = []
                    for record in db:
                        park = ParkOut(
                            id=record[0],
                            full_name=record[1],
                            city=record[2],
                            state=record[3],
                            description=record[4],
                            park_url=record[5],
                            park_id=record[6],
                            park_code=record[7],
                            activities=record[8]
                        )
                        print(record[8])
                        result.append(park)
                    return result
        except Exception as e:
            print(e)
            return {"message": "Could not get all data"}

    def get_one_park(self, park_id) -> ParkOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id,
                        full_name,
                        city,
                        state,
                        description,
                        park_url,
                        park_id,
                        park_code,
                        activities
                        FROM parks
                        WHERE park_id = %s
                        """, [park_id]
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_park_out(record)
        except Exception as e:
                print(e)
                return {"message": "Could not get all data"}


    def record_to_park_out(self, record):
        return ParkOut(
            id=record[0],
            full_name=record[1],
            city=record[2],
            state=record[3],
            description=record[4],
            park_url=record[5],
            park_id=record[6],
            park_code=record[7],
            activities=record[8]
        )
