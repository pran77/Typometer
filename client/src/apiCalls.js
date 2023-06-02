import axios from './utils/client.js';
import { LoginFailure, LoginStart, LoginSuccess } from "./context/AuthActions"

export const loginCall = async (userCredential, dispatch) => {
    dispatch((LoginStart))
    try {
        const res = await axios.post("http://localhost:4000/api/auth/login", userCredential)
        sessionStorage.setItem('user', JSON.stringify(res.data))
        console.log(res.data)
        dispatch(LoginSuccess(res.data))
    } catch (error) {
        dispatch(LoginFailure(error))
    }
}