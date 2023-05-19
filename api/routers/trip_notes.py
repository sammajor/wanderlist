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
from queries.trip_notes import TripNoteQueries
from models.trip_notes import (
    TripNoteIn,
    TripNoteOut,
)


router = APIRouter()


@router.post("/api/trips/{trip_id}/notes", response_model=TripNoteOut)
async def create_trip(
    trip: TripNoteIn,
    response: Response,
    repo: TripNoteQueries = Depends(),
):
    return repo.create(trip)
