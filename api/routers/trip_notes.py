from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
<<<<<<< HEAD
=======

>>>>>>> 9e2a2aed33dbb6684db708f5f59c9442e729d28b
from typing import Union, List, Optional
from authenticator import authenticator
from queries.trip_notes import TripNoteQueries
from models.trip_notes import (
<<<<<<< HEAD
    TripNoteIn,
    TripNoteOut,
)


=======
    TripNoteForm,
    TripNoteIn,
    TripNoteOut
)

>>>>>>> 9e2a2aed33dbb6684db708f5f59c9442e729d28b
router = APIRouter()


@router.post("/api/trips/{trip_id}/notes", response_model=TripNoteOut)
<<<<<<< HEAD
async def create_trip(
    trip: TripNoteIn,
    response: Response,
    repo: TripNoteQueries = Depends(),
):
    return repo.create(trip)
=======
async def create_note(
    note: TripNoteIn,
    # trip_id: int,
    # account_id: int,
    response: Response,
    repo: TripNoteQueries = Depends(),
):
    return repo.create_note(note)


@router.get("/api/trips/{trip_id}/notes")
async def get_all_notes(
    account_id: int,
    trip_id: int,
    repo: TripNoteQueries = Depends(),
):
    return repo.get_all_notes(account_id, trip_id)

@router.get("/api/trips/{trip_id}/notes/{note_id}")
def get_one_note(
    trip_id: int,
    note_id: int,
    account_id: int,
    response: Response,
    repo: TripNoteQueries = Depends(),
) -> Optional[TripNoteOut]:
    note = repo.get_one_note(account_id, trip_id, note_id)
    if note is None:
        response.status_code = 404
    return note
>>>>>>> 9e2a2aed33dbb6684db708f5f59c9442e729d28b
