FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app

COPY requirements.txt requirements.txt
COPY main.py main.py
COPY Park.py Park.py

COPY queries queries
COPY routers routers
COPY migrations migrations
COPY models models
COPY tests tests
COPY authenticator.py authenticator.py


RUN python -m pip install -r requirements.txt

COPY migrations migrations

CMD python -m migrations up && python Park.py && uvicorn main:app --host 0.0.0.0 --port 80
