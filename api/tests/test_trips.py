from fastapi.testclient import TestClient
from main import app
import json
from queries.trips import TripQueries
from models.trips import TripIn
from authenticator import authenticator

client = TestClient(app)


class FakeTripQueries:
    def get_one_trip(self, account_id: int, trip_id: int):
        return {
            "id": trip_id,
            "account_id": account_id,
            "start_date": "2023-06-04",
            "end_date": "2023-06-07",
            "park": "Aspen",
            "trip_status": "Completed",
        }

    def create(self, account_id: int, trip: TripIn):
        return {
            "id": 1,
            "account_id": 6,
            "start_date": "2023-06-24",
            "end_date": "2023-06-28",
            "park": "Acadia National Park",
            "trip_status": "pending",
        }

    def get_all_trips(self, account_id: int):
        return []


def fake_get_current_user_data():
    return {"id": "1337"}


def test_get_one_trip():
    # Arrange
    app.dependency_overrides[TripQueries] = FakeTripQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_user_data

    # Act
    res = client.get("/api/trips/900")
    data = res.json()

    # Assert
    assert res.status_code == 200
    assert data == {
        "id": 900,
        "account_id": 1337,
        "start_date": "2023-06-04",
        "end_date": "2023-06-07",
        "park": "Aspen",
        "trip_status": "Completed",
    }
    # Cleanup
    app.dependency_overrides = {}


def test_get_all_trips():
    # Arrange
    app.dependency_overrides[TripQueries] = FakeTripQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_user_data
    # Act
    res = client.get("/api/trips")
    data = res.json()
    # Assert
    assert res.status_code == 200
    assert data == []


def fake_get_current_account_data():
    return {"id": 1}


def test_create_trip():
    # Arrange
    app.dependency_overrides[TripQueries] = FakeTripQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    trip_in = {
        "start_date": "2023-06-24",
        "end_date": "2023-06-28",
        "park": "Acadia National Park",
    }
    res = client.post("/api/trips", json=trip_in)
    data = res.json()

    # Assert
    assert res.status_code == 200
    assert data == {
        "id": 1,
        "account_id": 6,
        "start_date": "2023-06-24",
        "end_date": "2023-06-28",
        "park": "Acadia National Park",
        "trip_status": "pending",
    }

    # cleanup
    app.dependency_overrides = {}
