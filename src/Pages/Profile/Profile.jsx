import { useNavigate } from "react-router-dom"
import "./profile.css"
const Profile = ()=>{
    const navigate = useNavigate()
    return(
        <>
            <div className="profile">
                <div className="profile-container">
                    <div className="toporleft">
                        <div className="profile-icon">
                            M
                        </div>
                        <div className="profile-details">
                            <h5 className="name">Vasanth</h5>
                            <div className="emailmobile">
                                <h5>mrvasanth93@gmail.com</h5>
                                <h5>+91-9345488130</h5>
                            </div>
                        </div>
                    </div>
                    <div className="bottomorright">
                        <div className="sections">
                            <div onClick={()=>{navigate("/profile/my-orders")}} className="section">My orders</div>
                            <div className="section">Cart</div>
                            <div className="section">Logout</div>
                            <div className="section">Notifications</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile