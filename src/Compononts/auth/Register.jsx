import "./auth.css"
import notvisible from "../../assets/icons/icons8-hide-24.png"
import visibile from "../../assets/icons/icons8-closed-eye-50.png"
import glogo from "../../assets/icons/icons8-google-48.png"
import { NavLink, useNavigate } from "react-router-dom"
import { useState,useRef, useEffect } from "react"
import axios from "axios"
import { authBase } from "../../utils"
const Register = () => {
    const [img,setImg] = useState([notvisible,visibile])
    const passwordRef = useRef()
    const [isVisible,setVisible] = useState(1)
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [mobileNumber, setMobileNumber] = useState()
    const [password, setPassword] = useState()
    const [message,setMessage] = useState()
    const error_message = useRef()
    const navigate = useNavigate()
    useEffect(()=>{
        if(isVisible == 1){
            passwordRef.current.type = "password"
        }
        else{
            passwordRef.current.type = "text"
        }
    },[isVisible])
    const handleResponse = ()=>{
        setMessage()
        navigate("/login")
    }
    const handleRegister = async () => {
        try {
            const response = await axios.post(`${authBase}signup`, { fullName, email, mobileNumber, password }, { withCredentials: true })
            response && response.data.success == false && setMessage(response.data.message)
            response && response.data.success == true && handleResponse()
        } catch (error) {
            error.message == "Network Error" && console.log("create server error page");
            error.message == "Request failed with status code 404" && console.log("create server error page");
        }
    }
    return (
        <>
            <div className="auth-form">
                <div className="login-register">
                    <h5 className="title">Register your account</h5>
                    <div className="inputs">
                        <input value={fullName} onChange={(e) => { setFullName(e.target.value) }} className="email" type="text" placeholder="Full Name" />
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} className="email" type="text" placeholder="Email" />
                        <input value={mobileNumber} onChange={(e) => { setMobileNumber(e.target.value) }} className="email" type="text" placeholder="Mobile Number" />
                        <div className="password">
                            <input ref={passwordRef} value={password} onChange={(e) => { setPassword(e.target.value)}} type="password" placeholder="Password" />
                            <div onClick={()=>{isVisible == 0 ? setVisible(1) : setVisible(0)}} className="visible">
                                <img src={img[isVisible]} alt="" />
                            </div>
                        </div>
                    </div>
                    {message && <h6 ref={error_message} className="error-message">{message}</h6>}
                    <h5 className="forget-password">Forget Password ?</h5>
                    <div onClick={()=>{handleRegister()}} className="login-register-btn">
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