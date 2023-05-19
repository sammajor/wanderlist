from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from authenticator import authenticator
from routers import accounts, trips, trip_notes

app = FastAPI()
app.include_router(authenticator.router, tags=["Authentication"])
app.include_router(accounts.router, tags=["Accounts"])
app.include_router(trips.router, tags=["Trips"])
<<<<<<< HEAD
app.include_router(trip_notes.router, tags=["Trip Note"])
=======
app.include_router(trip_notes.router, tags=["Trip_Note"])
>>>>>>> 9e2a2aed33dbb6684db708f5f59c9442e729d28b

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "module": 3,
            "week": 17,
            "day": 5,
            "hour": 19,
            "min": "00"
        }
    }
