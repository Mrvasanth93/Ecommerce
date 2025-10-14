import "./Card1.css"
import sample from "../../assets/img (8).jpg"
import wishlist from "../../assets/icons/icons8-heart-26 (1).png"
import cartImg from "../../assets/icons/icons8-cart-24.png"
import { useLocation, useNavigate } from "react-router-dom"
const Card1 = () =>{
    const path = useLocation();
    const navigate = useNavigate()
    const openProduvtView = () =>{
        navigate(`${path.pathname}/product-id`)
    }
    return(
        <>
            <div onClick={()=>{openProduvtView()}} className="card1">
                <div className="card-top">
                    <div className="wishlist">
                        <img src={wishlist} alt="" />
                    </div>
                    <img src={sample} alt="" />
                </div>
                <div className="card-middle">
                    <div className="productname">Mens casual shirt</div>
                    <div className="productdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eos.</div>
                    <div className="price">
                        <div className="current-price">$ 29.99</div>
                        <div className="original-price">$ 39.99</div>
                    </div>
                </div>

                <div className="card-footer">
                    <div className="cart-img"><img src={cartImg} alt="" /></div>
                    <div>add to cart</div>
                </div>
            </div>
        </>
    )
}

export default Card1