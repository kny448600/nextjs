import {connect} from "/utils/database.js";

export default async function Home() {
let client = await connectDB;
const db = client.db("forom");
db.collection('post').find();
let result = await db.collection('post').find().toArray();
  return (
    <div>
      {result[0].title}
      <br></br>
      {result[0].content}
    </div>
  );
}
