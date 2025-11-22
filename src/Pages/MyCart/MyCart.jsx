import "./MyCart.css"
import sample from '../../assets/new/Laptop Backpack.webp'
import { useEffect, useRef, useState } from "react"
import { orderbase } from "../../utils"
import axios from "axios"
const MyCart = () => {
    const [quantity,setQuantity] = useState(1)
    return (
        <div className="order">
            <div className="order-container">
                <h5 className="title">My Cart</h5>
                <div className="product">
                    <div className="top">
                        <div className="left">
                            <div className="product-img">
                                <img src={sample} alt="" />
                            </div>
                        </div>
                        <div className="right">
                            <h5>product-name</h5>
                            <h6>orderid</h6>
                            <div className="qunatityandremove">
                                <div className="quantity">
                                    <h5 onClick={() => { quantity == 1 ? setQuantity(1) : setQuantity(quantity - 1) }} className="btn">-</h5>
                                    <h5>{quantity}</h5>
                                    <h5 onClick={() => { setQuantity(quantity + 1) }} className="btn">+</h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="ordernow-btn">
                    Order now
                </div>
            </div>
        </div>
    )
}
export default MyCart