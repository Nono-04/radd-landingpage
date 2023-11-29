// Import the PocketBase JS library
import PocketBase from "pocketbase";

const client = new PocketBase("http://localhost:8090");
console.log("PocketBase client created");
export default client;
