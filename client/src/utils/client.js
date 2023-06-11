import axios from "axios";
// const Base_URL =
//     process.env.NODE_ENV === "production"
//         ? "https://typometer-backend.onrender.com"
//         : "http://localhost:4000";

const BASE_URL = "https://typometer-backend.onrender.com";
const client = axios.create({ BASE_URL });
export default client;

