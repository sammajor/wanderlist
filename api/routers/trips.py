from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from typing import Union, List, Optional
from authenticator import authenticator
from queries.trips import TripQueries
from models.trips import (
    TripIn,
    TripOut,
    TripForm,
    Error
)


router = APIRouter()


@router.post("/api/trips", response_model=TripOut)
async def create_trip(
    trip: TripIn,
    response: Response,
    repo: TripQueries = Depends(),
):
    return repo.create(trip)


@router.get("/api/trips", response_model=Union[List[TripOut], Error])
async def get_all_trips(
    repo: TripOut = Depends(),
):
    return repo.get_all_trips()

@router.get("/api/trips/{trip_id}", response_model=Optional[TripOut])
def get_one_trip(
    trip_id: int,
    response: Response,
    repo: TripOut = Depends(),
) -> TripOut:
    trip = repo.get_one(trip_id)
    if trip is None:
        response.status_code = 404
    return trip
