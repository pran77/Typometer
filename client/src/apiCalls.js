import axios from './utils/client.js';
import { LoginFailure, LoginStart, LoginSuccess } from "./context/AuthActions"
// import BASE_URL from "./utils/client.js"

export const loginCall = async (userCredential, dispatch) => {
    dispatch((LoginStart))
    try {
        const res = await axios.post("https://typometer-backend.onrender.com/api/auth/login", userCredential)
        sessionStorage.setItem('user', JSON.stringify(res.data))
        console.log(res.data)
        dispatch(LoginSuccess(res.data))
    } catch (error) {
        dispatch(LoginFailure(error))
    }
}