from pydantic import BaseModel
from typing import List


class ParkOut(BaseModel):
    id: int
    full_name: str
    park_code: str
    description: str
    city: str
    state: str
    park_url: str
    park_id: str
    activities: list
    park_image: str


class ParksList(BaseModel):
    parks: List[ParkOut]
