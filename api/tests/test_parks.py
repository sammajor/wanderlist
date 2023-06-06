# from fastapi.testclient import TestClient
# from main import app

# client = TestClient(app)


# class FakeParkQueries:
#     def get_all(self):
#         return []


# def test_get_park_data():
#     # Arrange
#     app.dependency_overrides[ParkQueries] = FakeParkQueries
#     # Act
#     # Assert