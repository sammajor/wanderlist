from fastapi import (
    Depends,
    Response,
    APIRouter,
)
from typing import Optional
from authenticator import authenticator
from queries.trips import TripQueries
from models.trips import (
    TripIn,
    TripOut,
)


router = APIRouter()

#### ALLOWS FOR POST REQUEST OF A TRIP INSTANCE ####
@router.post("/api/trips", response_model=TripOut)
async def create_trip(
    trip: TripIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: TripQueries = Depends(),
):
    return repo.create(account_data["id"], trip)

#### ALLOWS FOR GET REQUEST OF ALL TRIP INSTANCES CREATED BY USER ####
@router.get("/api/trips")
async def get_all_trips(
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: TripQueries = Depends(),
):
    return repo.get_all_trips(account_data["id"])

#### ALLOWS FOR GET REQUEST OF ONE TRIP'S DETAILS ####
@router.get("/api/trips/{trip_id}")
def get_one_trip(
    trip_id: int,
    response: Response,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: TripQueries = Depends(),
) -> Optional[TripOut]:
    trip = repo.get_one_trip(account_data["id"], trip_id)
    if trip is None:
        response.status_code = 404
    return trip

#### ALLOWS USER TO UPDATE A PENDING TRIP TO EITHER 'COMPLETED' OR 'CANCELLED' ####
@router.put("/api/trips/{trip_id}/status")
def update_trip_status(
    trip_id: int,
    trip_status: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: TripQueries = Depends(),
):
    print(trip_status)
    return repo.update_trip_status(trip_id, trip_status)
