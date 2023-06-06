steps = [
    [
        # “Up” SQL statement
        """
        CREATE TABLE tripnotes (
            note_id SERIAL PRIMARY KEY NOT NULL,
            trip_id INT NOT NULL REFERENCES trips(trip_id),
            account_id INT NOT NULL REFERENCES accounts(id),
            title VARCHAR(200) NOT NULL,
            description TEXT NOT NULL
        );
        """,
        # “Down” SQL statement
        """
        DROP TABLE tripnotes;
        """,
    ]
]
