from fastapi.testclient import TestClient
from main import app
import json
from models.trips import TripIn

client = TestClient(app)

class FakeTripQueries():
    def create(self, account_id: int, trip: TripIn):
        pass




def test_create_trip():
    pass
