from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from models.parks import ParkOut
from queries.parks import ParkQueries
from authenticator import authenticator
from typing import List

router = APIRouter()

@router.get("/api/parks", response_model=List[ParkOut])
def get_park_data(
    queries: ParkQueries = Depends()
    ):
        try:
            return queries.get_all_parks()
        except:
               raise HTTPException(status_code=404, detail="Park data not found")

@router.get("/api/parks/{park_id}", response_model=ParkOut)
def get_one_park(
        park_id: str,
        queries: ParkQueries = Depends()
    ):
        park = queries.get_one_park(park_id)
        if park is None:
                raise HTTPException(status_code=404, detail="Park not found")
        return park
