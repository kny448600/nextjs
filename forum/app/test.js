import {MongoClient, mongoClient} from "mongodb";

const Client = await MongoClient.connect('mongodb+srv://hsh448600:<gk797700>@hasanghyun.afxjvtw.mongodb.net/?retryWrites=true&w=majority&appName=hasanghyun',{useNewUrlparser:true})
const db = client.db("from");
db.collection('post').find();