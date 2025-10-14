import "./auth.css"
import notvisible from "../../assets/icons/icons8-hide-24.png"
import glogo from "../../assets/icons/icons8-google-48.png"
import { NavLink } from "react-router-dom"
const Register = () => {
    return (
        <>
            <div className="auth-form">
                <div className="login-register">
                    <h5 className="title">Register your account</h5>
                    <div className="inputs">
                        <input className="email" type="text" placeholder="Full Name" />
                        <input className="email" type="text" placeholder="Email" />
                        <div className="password">
                            <input type="text" placeholder="Password" />
                            <div className="visible">
                                <img src={notvisible} alt="" />
                            </div>
                        </div>
                    </div>
                    <h5 className="forget-password">Forget Password ?</h5>
                    <div className="login-register-btn">
                        Singup
                    </div>
                    <div className="login-signup-link">Already have an account ?<span><NavLink className="link" to="/login">Login</NavLink></span></div>
                    <div className="login-signup-link">Or continue with</div>
                    <div className="google">
                        <div className="g-logo"><img src={glogo} alt="" /></div>
                        <div className="g-text">Signup with Google</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;