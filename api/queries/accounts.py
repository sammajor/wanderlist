
from queries.pool import pool
from models.accounts import AccountOutWithPassword, AccountOut, AccountIn


class AccountQueries:

    def get(self, email: str) -> AccountOutWithPassword:
        pass

    def create(self, info: AccountIn, hashed_password: str) -> AccountOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO accounts
                            (email, password, name)
                        VALUES
                            (%s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            info.email,
                            info.password,
                            info.name,
                        ],
                    )
                    id = result.fetchone()[0]
                    return self.account_in_to_out(id, info)
        except Exception:
            return {"message": "Create did not work"}

    def account_in_to_out(self, id: int, account: AccountIn):
        old_data = account.dict()
        return AccountOut(id=id, **old_data)
