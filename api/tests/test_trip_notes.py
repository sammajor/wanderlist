from fastapi.testclient import TestClient
from main import app
from models.trip_notes import TripNoteOut
from queries.trip_notes import TripNoteQueries
from authenticator import authenticator

client = TestClient(app)


class FakeTripNoteQueries:
    def get_one_note(self, account_id: int, trip_id: int, note_id: int):
        return {
            "id": note_id,
            "account_id": account_id,
            "trip_id": trip_id,
            "title": "Test Note",
            "description": "Test Description",
        }


def fake_get_current_account_data():
    return {"id": "1234"}


def test_get_one_note():
    ###ARRANGE
    app.dependency_overrides[TripNoteQueries] = FakeTripNoteQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    ###ACT
    res = client.get("/api/trips/2/notes/3")
    data = res.json()
    ###ASSERT
    assert res.status_code == 200
    assert data == {
        "id": 3,
        "account_id": 1234,
        "trip_id": 2,
        "title": "Test Note",
        "description": "Test Description",
    }
    ### CLEAN UP
    app.dependency_overrides = {}
