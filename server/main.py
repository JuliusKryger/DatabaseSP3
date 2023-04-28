from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder

from services import db_service
from models import dtos

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return db_service.get_students()


@app.get("/top")
def get_top_10_students():
    return db_service.get_top_10_students()

@app.post("/create")
def create_student(studentDTO: dtos.StudentDTO):
    student = jsonable_encoder(studentDTO)
    db_service.create_student(student)
