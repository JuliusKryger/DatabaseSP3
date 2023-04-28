from pymongo.mongo_client import MongoClient

def get_database():
   url = 'mongodb://localhost:27017/'

   # Create a new client and connect to the server
   client = MongoClient(url)

   return client['school']


def get_students():
   db = get_database()
   collection = db["students"]
   documents = collection.find()

   users = []

   for doc in documents:
      users.append(doc['name'])

   return users


def get_top_10_students():
   db = get_database()
   collection = db["students"]
   top_students = collection.find({}, {'name': 1, 'scores': {'$slice': [0, 1]}}).sort([('scores.0', -1)]).limit(10)


   students = []
   for s in top_students:
      student = {"name": s["name"], "score": s["scores"][0]["score"]}
      students.append(student)

   return students

def create_student(student):
   db = get_database()
   collection = db["students"]

   result = collection.insert_one(student)

   return result
