import "./login.css";
// import Register from "./Register";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
    const createAccount = ()=> {
            navigate('/Register')
    }
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Typometer</h3>
                <span className="loginDesc">Do check your typing speed and improve it by consistent practice...</span>
            </div>
            <div className="loginRight">
                <div className="loginRightBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginbutton">LogIn</button>
                    <span className="forgotPassword">Forgot Password?</span>
                    {/* <button className="createAccount">NCreate New Account</button> */}
                    <div className="createRightAccount">
                    <span className="newRegister">New Register? </span>
                    <span className="createAccount" onClick={() => createAccount()}>Create an account</span>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}