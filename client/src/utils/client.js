import axios from "axios";
const Base_URL =
    process.env.NODE_ENV === "production"
        ? "https://typometer-backend.onrender.com"
        : "http://localhost:4000";

const client = axios.create({ Base_URL });
export default client;

