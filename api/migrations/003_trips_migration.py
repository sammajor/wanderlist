steps = [
    [
        # “Up” SQL statement
        """
        CREATE TABLE trips (
            trip_id SERIAL PRIMARY KEY NOT NULL,
            account_id INT NOT NULL REFERENCES accounts(id),
            start_date DATE NOT NULL,
            end_date DATE NOT NULL,
            park VARCHAR(500) NOT NULL
        );
        """,
        # “Down” SQL statement
        """
        DROP TABLE trips;
        """
    ]
]
