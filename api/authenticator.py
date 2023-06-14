import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from queries.accounts import AccountQueries, AccountOutWithPassword
from models.accounts import AccountOut

# GETS ALL ACCOUNT DATA AS WELL AS A TOKEN AND HASHED PASSWORD PER ACCOUNT


class ExampleAuthenticator(Authenticator):
    # Use the repo to get the account based on username
    async def get_account_data(
        self,
        username: str,
        accounts: AccountQueries,
    ):
        return accounts.get(username)

    # Return accounts
    def get_account_getter(
        self,
        accounts: AccountQueries = Depends(),
    ):
        return accounts

    # Return encrypted password value from account object
    def get_hashed_password(self, account: AccountOutWithPassword):
        return account.hashed_password

    # Return username and data for the cookie
    def get_account_data_for_cookie(self, account: AccountOutWithPassword):
        return account.email, AccountOut(**account.dict())


authenticator = ExampleAuthenticator(os.environ["SIGNING_KEY"])
