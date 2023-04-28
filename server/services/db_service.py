from pymongo.mongo_client import MongoClient

def get_database():
   url = 'mongodb://localhost:27017/'

   # Create a new client and connect to the server
   client = MongoClient(url)

   return client['library']


def get_books():
   db = get_database()
   collection = db["books"]
   documents = collection.find()

   users = []

   for doc in documents:
      users.append(doc['title'])

   return users