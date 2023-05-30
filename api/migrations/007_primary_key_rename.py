steps = [
    [
        #"UP" SQL statement
        """
        ALTER TABLE trips
        RENAME COLUMN trip_id to id;
        ALTER TABLE tripnotes
        RENAME COLUMN note_id to id;
        """,
        # "DOWN" SQL statement
        """
        ALTER TABLE trips
        RENAME COLUMN id to trip_id;
        ALTER TABLE tripsnotes
        RENAME COLUMN id to note_id;
        """
    ]
]
