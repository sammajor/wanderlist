steps = [
    [
        #"UP" SQL statement
        """
        CREATE TABLE parks (
            id SERIAL PRIMARY KEY NOT NULL,
            full_name VARCHAR(100) NOT NULL,
            city VARCHAR(100) NOT NULL,
            state VARCHAR(100) NOT NULL,
            description TEXT NOT NULL,
            activities JSONB,
            park_url VARCHAR(1000),
            park_id VARCHAR(100) NOT NULL,
            park_code VARCHAR(100) NOT NULL
        );
        """,
        # "DOWN" SQL statement
        """
        DROP TABLE parks;
        """
    ]
]
