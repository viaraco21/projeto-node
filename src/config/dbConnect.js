import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:123@raco2.9qrexdv.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;

