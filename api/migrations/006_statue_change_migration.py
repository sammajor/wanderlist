steps = [
    [
        # "UP" SQL statement
        """
        CREATE TYPE status AS ENUM ('Pending', 'Completed', 'Cancelled');
        ALTER TABLE trips
        ADD COLUMN trip_status status NOT NULL DEFAULT 'Pending';

        """,
        # "DOWN" SQL statement
        """

        """,
    ]
]
