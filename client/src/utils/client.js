import axios from "axios";
const baseURL =
    process.env.NODE_ENV === "production"
        ? "https://typometers-backends.onrender.com"
        : "http://localhost:4000";

const client = axios.create({ baseURL });
export default client;
