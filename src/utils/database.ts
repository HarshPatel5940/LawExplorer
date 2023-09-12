import { MongoClient } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI || " ";

export const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
    } catch (error) {
        console.log(error);
    }
}
run().catch(console.dir);
