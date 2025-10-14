import "./Nav1.css"
import logo from "../../assets/IMG_20250606_130008.jpg";
import serchIcon from "../../assets/icons/icons8-find-30.png"
import wishlist from "../../assets/icons/icons8-heart-26 (1).png"
import cart from "../../assets/icons/icons8-cart-24.png"
import { NavLink, useNavigate } from "react-router-dom";
const Nav1 = () =>{
    const navigate = useNavigate();
    return(
        <>
            <div className="nav-1">
                <div className="nav-1-left">
                        <img src={logo} alt="" />
                </div>
                <div onClick={()=>{navigate("/serch")}} className="nav-1-middle">
                        <div className="serch-box">
                            <input placeholder="Serch for Products...." type="text" />
                        </div>
                        <div className="serch-icon">
                            <img src={serchIcon} alt="" />
                        </div>
                </div>
                <div className="nav-1-right">
                    <div className="auth">
                        <div className="login"> <NavLink className="link" to="/login">Login</NavLink> </div>
                        <div> <NavLink className="link" to="/signup">Register</NavLink> </div>
                    </div>
                    <div title="Wishlist" className="nav-btns">
                        <div className="wish">
                            <img src={wishlist} alt="" />
                        </div>
                        <div title="Cart" className="cart">
                            <img src={cart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav1;