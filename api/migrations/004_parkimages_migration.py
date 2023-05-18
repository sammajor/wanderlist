steps = [
    [
        #"UP" SQL statement
        """
        CREATE TABLE park_images(
            park_code VARCHAR(100) NOT NULL,
            image_url VARCHAR(1000) NOT NULL
        );
        """,

        #"DOWN" SQL Statement
        """
        DROP TABLE park_images;
        """
    ]
]
