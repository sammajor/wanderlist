steps = [
    [
        # “Up” SQL statement
        """
        CREATE TABLE tripnotes (
            id SERIAL PRIMARY KEY NOT NULL,
            trip_id INT NOT NULL REFERENCES trips(id),
            title VARCHAR(200) NOT NULL,
            description TEXT NOT NULL
        );
        """,
        # “Down” SQL statement
        """
        DROP TABLE tripnotes;
        """
    ]
]
