import {connectDB} from "@/utils/database.js";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"


export const authOptions = {
    providers : [
        GithubProvider({
            clientId : 'Ov23liMajMBhtvT9WqNQ',
            clientSecret : 'c9548c5d6087b66ff1c81fae67588825ce9a93b3' 
        }),
    ],
    secret : 'qwer1234',
    adapter : MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);