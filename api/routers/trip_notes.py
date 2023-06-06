from fastapi import (
    Depends,
    Response,
    APIRouter,
)
from typing import Optional
from authenticator import authenticator
from queries.trip_notes import TripNoteQueries
from models.trip_notes import (
    TripNoteIn,
    TripNoteOut,
)


router = APIRouter()


@router.post("/api/trips/{trip_id}/notes", response_model=TripNoteOut)
async def create_note(
    note: TripNoteIn,
    response: Response,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: TripNoteQueries = Depends(),
):
    return repo.create_note(account_data["id"], note)


@router.get("/api/trips/{trip_id}/notes")
async def get_all_notes(
    trip_id: int,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: TripNoteQueries = Depends(),
):
    return repo.get_all_notes(account_data["id"], trip_id)


@router.get("/api/trips/{trip_id}/notes/{note_id}")
def get_one_note(
    trip_id: int,
    note_id: int,
    response: Response,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: TripNoteQueries = Depends(),
) -> Optional[TripNoteOut]:
    note = repo.get_one_note(account_data["id"], trip_id, note_id)
    if note is None:
        response.status_code = 404
    return note


@router.delete("/api/trips/{trip_id}/notes/{note_id}", response_model=bool)
def delete_note(
    note_id: int,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: TripNoteQueries = Depends(),
) -> bool:
    return repo.delete(account_data["id"], note_id)
