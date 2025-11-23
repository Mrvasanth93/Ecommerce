import { useNavigate } from "react-router-dom"
import "./Profile.css"
import bg from "../../assets/img (4).avif"
import Profileimg from "../../assets/img (1).webp"
import axios from "axios"
import { authBase } from '../../utils'
import { useEffect, useState } from "react"
const Profile = () => {
    const navigate = useNavigate()
    const [authenticated, setAuthenticated] = useState(false)
    const handleNavigate = (path) =>{
        navigate(path)
    }
    const handleIsAuthenticated = async () => {
        try {
            const response = await axios.get(`${authBase}profile`, { withCredentials: true })
            console.log(response);
            response && response.data.success == false && response.data.message == "continue with login" && handleNavigate("/login")
            response && response.data.success == false && response.data.message == "cannot find user" && handleNavigate("/login")
            response && response.data.success == false && response.data.message == "un Authorized token" && handleNavigate("/login")
            response && response.data.success == true && response.data.user && setAuthenticated(true)

        } catch (error) {
            error.message == "Network Error" && console.log("create server error page");
            error.message == "Request failed with status code 404" && console.log("create server error page");
        }
    }
    useEffect(() => {
        handleIsAuthenticated()
    }, [])
    const handleLogout = async () => {
        try {
            const response = await axios.delete(`${authBase}logout`,{withCredentials:true})
            response && response.data.success == false && response.data.message == "continue with login" && handleNavigate("/login")
            response && response.data.success == false && response.data.message == "cannot find user" && handleNavigate("/login")
            response && response.data.success == false && response.data.message == "un Authorized token" && handleNavigate("/login")
            response && response.data.success == true && response.data.message == "logout" && handleNavigate("/login")
        } catch (error) {
            error.message == "Network Error" && console.log("create server error page");
            error.message == "Request failed with status code 404" && console.log("create server error page");
        }
    }
    return (
        <>
            {
                authenticated == true && <div className="profile">
                    <div className="profile-container">
                        <div className="background">
                            <img src={bg} alt="" />
                            <div className="profile-icon">
                                <img src={Profileimg} alt="" />
                            </div>
                            <div className="profile-details">
                                <h5 className="name">Vasanth</h5>
                                <h6 className="email">mrvasanth93@gmail.com</h6>
                            </div>
                        </div>
                        <div className="bottomorright">
                            <div className="sections">
                                <div onClick={() => { navigate("/profile/my-orders") }} className="section">My orders</div>
                                <div onClick={() => { navigate("/profile/my-cart") }} className="section">Cart</div>
                                <div onClick={() => { handleLogout() }} className="section">Logout</div>
                                <div className="section">Notifications</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Profile