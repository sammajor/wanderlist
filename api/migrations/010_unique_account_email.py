steps = [
    [
        #"UP" SQL statement
        """
        -- Delete any duplicate accounts except for the first one
        DELETE FROM accounts
        WHERE id NOT IN (
            SELECT MIN(id)
            FROM accounts
            GROUP BY email
        );
        ALTER TABLE accounts ADD CONSTRAINT accounts_unique_email UNIQUE (email);
        """,
        # "DOWN" SQL statement
        """

        """
    ]
]
