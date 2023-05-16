steps = [
    [
        # “Up” SQL statement
        """
        CREATE TABLE accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            email VARCHAR(100) NOT NULL,
            hashed_password VARCHAR(1000) NOT NULL,
            name VARCHAR(100) NOT NULL
        );
        """,
        # “Down” SQL statement
        """
        DROP TABLE accounts;
        """
    ]
]
