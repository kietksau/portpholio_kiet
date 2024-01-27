from pymongo import MongoClient


# Replace the placeholder values in the connection string with your actual credentials
connection_string = "mongodb+srv://kietks:KvifUvcFRDwhhMFW@cluster0.4cdusdg.mongodb.net/"

# Create a MongoClient instance
client = MongoClient(connection_string)

# Access a specific database
database = client["kietbase"]

# Access the tasks collection within the database
tasks_collection = database["todoapp"]

# Retrieve all documents from the collection
all_tasks = tasks_collection.find()

# Print the IDs of all documents
for task in all_tasks:
    print("task_name:", task["task_name"])
    print("priority:", task["priority"]) 
    print("time:", task["value"])