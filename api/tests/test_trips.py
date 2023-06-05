from fastapi.testclient import TestClient
from main import app
from queries.trips import TripQueries
from authenticator import authenticator

client = TestClient(app)

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
    # Cleanup
    app.dependency_overrides = {}
