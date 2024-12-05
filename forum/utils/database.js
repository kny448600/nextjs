import { MongoClient } from "mongodb";
const url = 'mongodb+srv://test:1234@jeonghun.jb9ashc.mongodb.net/?retryWrites=true&w=majority&appName=Jeonghun'
const options = {useNewUrlParser:true};
let connectDB;

if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
        global._mongo = new MongoClient(url,options).connect();
    }
    connectDB = global._mongo;
} else {
    connectDB = new MongoClient(url, options).connect();
}
export {connectDB};