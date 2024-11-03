import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import { connectMongoDB } from "../../../../../lib/mongodb";
import { MongoClient } from "mongodb";
import { signOut } from "next-auth/react";

const uri = `${process.env.MONGODB_URI}`;
const client = new MongoClient(uri);
const db = client.db("cyscom-management");
const members = db.collection("Members");


export const authOptions = {    
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {},
  
        async authorize(credentials) {
          const { email, password } = credentials;
  
          try {
            await connectMongoDB();
            const user = await members.findOne({ email: email });
            
            if (!user) {
              console.log(typeof(email))
              return null;
            }
              
            if (password != user.password) {
              console.log(typeof(email))
              return null;
            }
            
            return user;
          } catch (error) {
            console.log("Error: ", error);
          }
        },
      }),
    ],
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/",
    },
  };
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST};