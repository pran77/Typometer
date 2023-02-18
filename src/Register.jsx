import "./Register.css";

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Typometer</h3>
                <span className="loginDesc">Do check your typing speed and improve it by consistent practice...</span>
            </div>
            <div className="loginRight">
                <div className="loginRightBox">
                <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Password again" className="loginInput" />
                    <button className="loginbutton">Sign Up</button>
                    
                    <button className="loginButtonRegister">Login Into Account</button>
                   
                </div>
            </div>
        </div>
      
    </div>
  )
}
