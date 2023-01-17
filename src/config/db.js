import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const user = process.env.USER;
const password = process.env.PASSWORD;
const cluster = process.env.CLUSTER;
const database = process.env.DATABASE;

try {
  // mongoose.connect(
  //   `mongodb+srv://${user}:${password}@${cluster}.eef4pue.mongodb.net/ws-node`
  // );
  mongoose.set("strictQuery", true);
  mongoose.connect(
    `mongodb://${user}:${password}@ac-udocqcl-shard-00-00.eef4pue.mongodb.net:27017,ac-udocqcl-shard-00-01.eef4pue.mongodb.net:27017,ac-udocqcl-shard-00-02.eef4pue.mongodb.net:27017/${database}?ssl=true&replicaSet=atlas-51e6a4-shard-0&authSource=admin&retryWrites=true&w=majority`
  );
} catch (error) {
  console.log(error);
}

const db = mongoose.connection;

export default db;
