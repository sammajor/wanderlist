from pydantic import BaseModel


class TripNoteIn(BaseModel):
    title: str
    trip_id: int
    description: str


class TripNoteOut(BaseModel):
    id: int
    trip_id: int
    account_id: int
    title: str
    description: str


class TripNoteForm(BaseModel):
    title: str
    trip_id: int
    description: str
