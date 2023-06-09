from fastapi import (
    Depends,
    HTTPException,
    APIRouter,
)
from models.parks import ParkOut
from queries.parks import ParkQueries
from typing import List

router = APIRouter()

#### GET REQUEST FOR ALL NATIONAL PARK DATA IN DATABASE ####
@router.get("/api/parks", response_model=List[ParkOut])
def get_park_data(queries: ParkQueries = Depends()):
    parks = queries.get_all_parks()
    if parks is None:
        raise HTTPException(status_code=404, detail="Park not found")
    return parks

#### GET REQUEST FOR DETAILS ABOUT ONE PARK FROM DATABASE ####
@router.get("/api/parks/{park_id}", response_model=ParkOut)
def get_one_park(park_id: str, queries: ParkQueries = Depends()):
    park = queries.get_one_park(park_id)
    if park is None:
        raise HTTPException(status_code=404, detail="Park not found")
    return park
