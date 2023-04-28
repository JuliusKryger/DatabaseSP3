from pydantic import BaseModel

class StudentDTO(BaseModel):
    name: str
    scores: list