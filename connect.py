from pymongo import MongoClient
connection_string = "mongodb+srv://tuankiet6713:kietpt1699@cluster0.ioktojf.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(connection_string)

database = client["todoapp"]
task_collection = database["task"]
all_tasks = task_collection.find()
for task in all_tasks:says:
database:todoapp
Collection: task 