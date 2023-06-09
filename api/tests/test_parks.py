from fastapi.testclient import TestClient
from main import app
from queries.parks import ParkQueries

client = TestClient(app)


class FakeParkQueries:
    def get_all_parks(self):
        return []


def test_get_park_data():
    # Arrange
    app.dependency_overrides[ParkQueries] = FakeParkQueries
    # Act
    res = client.get("/api/parks")
    # Assert
    assert res.status_code == 200