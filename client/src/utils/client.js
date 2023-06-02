import axios from "axios";
const baseURL =
    process.env.NODE_ENV === "production"
        ? "https://backend-typometer.herokuapp.com/api"
        : "http://localhost:4000";

const client = axios.create({ baseURL });
export default client;
