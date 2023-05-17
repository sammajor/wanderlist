from pydantic import BaseModel
from datetime import date


class TripIn(BaseModel):
    account_id: int
    start_date: date
    end_date: date
    park: str

class TripOut(BaseModel):
    id: int
    account_id: int
    start_date: date
    end_date: date
    park: str

class TripForm(BaseModel):
    start_date: date
    end_date: date
    park: str

class Error(BaseModel):
    message: str
