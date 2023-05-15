from pydantic import BaseModel

class DuplicateAccountError(ValueError):
    pass

class AccountIn(BaseModel):
    email: str
    password: str
    name: str

class AccountOut(BaseModel):
    id: int
    email: str
    name: str

class AccountOutWithPassword(AccountOut):
    hashed_password: str
