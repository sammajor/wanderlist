from fastapi.testclient import TestClient
from main import app
from queries.trips import TripQueries
from authenticator import authenticator

client = TestClient(app)

<<<<<<< HEAD
class FakeTripQueries:
    def get_all_trips(self, account_id: int):
        return []

def fake_get_current_account_data():
    return {"id": "1632"}

def test_get_all_trips():
    # Arrange
    app.dependency_overrides[TripQueries] = FakeTripQueries
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data
    # Act
    res = client.get("/api/trips")
    data = res.json()
    # Assert
    assert res.status_code == 200
    assert data == []
=======
>>>>>>> a4ffe9200086dcd51b62399bba2163f8942828a9
class FakeTripQueries():
    def get_one_trip(self, account_id: int, trip_id: int):
        return {
            "id": trip_id,
            "account_id": account_id,
            "start_date": "2023-06-04",
            "end_date": "2023-06-07",
            "park": "Aspen",
            "trip_status": "Completed"
        }

def fake_get_current_user_data():
    return {"id": "1337"}


def test_get_one_trip():
    # Arrange
    app.dependency_overrides[TripQueries] = FakeTripQueries
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_user_data

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
        "trip_status": "Completed"
    }
    # Cleanup
    app.dependency_overrides = {}
