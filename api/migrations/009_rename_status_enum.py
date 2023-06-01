steps = [
    [
        #"UP" SQL statement
        """
        ALTER TYPE status RENAME TO trip_status_enum;
        ALTER TABLE trips ALTER COLUMN trip_status TYPE trip_status_enum USING trip_status::text::trip_status_enum;
        """,
        # "DOWN" SQL statement
        """

        """
    ]
]
