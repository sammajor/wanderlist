from queries.pool import pool
from models.accounts import (
    AccountOutWithPassword,
    AccountIn,
    DuplicateAccountError,
)
from psycopg import errors


class AccountQueries:
    #### GET TOKEN ####
    def get(self, email: str) -> AccountOutWithPassword:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT id, email, name, hashed_password
                    FROM accounts
                    WHERE email = %s
                    """,
                    [email],
                )
                record = result.fetchone()
                if record is None:
                    return None
                return self.record_to_account_out(record)

    #### CREATE AN ACCOUNT WITH HASHED PASSWORD ####
    def create(
        self, info: AccountIn, hashed_password: str
    ) -> AccountOutWithPassword:
        with pool.connection() as conn:
            with conn.cursor() as db:
                try:
                    result = db.execute(
                        """
                        INSERT INTO accounts
                            (email, name, hashed_password)
                        VALUES
                            (%s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            info.email,
                            info.name,
                            hashed_password,
                        ],
                    )
                except errors.UniqueViolation:
                    raise DuplicateAccountError
                id = result.fetchone()[0]
                return self.account_in_to_out(id, info, hashed_password)

    #### RECEIVES ACCOUNT IN AND POSTS WITH ACCOUNT OUT - HASHED PASSWORD & ID ####
    def account_in_to_out(self, id: int, account: AccountIn, hashed_password):
        old_data = account.dict()
        return AccountOutWithPassword(
            id=id, hashed_password=hashed_password, **old_data
        )

    #### ALLOWS FOR RETURN OF ACCOUNT DATA WITHOUT POSTING VIA ACCOUNT IN ####
    def record_to_account_out(self, record):
        return AccountOutWithPassword(
            id=record[0],
            email=record[1],
            name=record[2],
            hashed_password=record[3],
        )
