import "./Card2.css"
import sample1 from "../../assets/img1.jpg"
import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import {imageBase} from "../../utils"
const Card2 = (data) => {
    const getHeight = useRef();
    const path = useLocation();
    const navigate = useNavigate()
    const openProduvtView = () =>{
        navigate(`/product/${data.data._id}`)
    }
    return (
        <>
            <div onClick={() => { openProduvtView() }} ref={getHeight} className="card2">
                <div className="card2-container">
                    <div className="card-top">
                        <img src={`${imageBase}${data.data.image}`} alt="" />
                    </div>
                    <div className="product-content">
                        <h4 className="product-name">{data.data.productName}</h4>
                        <h6 className="product-desc">
                           {data.data.productDescription}
                        </h6>
                        <h6 className="ratings">
                            ⭐⭐⭐⭐⭐
                        </h6>
                        <div className="price">
                            <h5 className="offer-price">
                                Rs.{data.data.productPrice}
                            </h5>
                            <h6 className="orignal-price">Rs.{data.data.productPrice+(data.data.productPrice%10)}</h6>
                        </div>
                    </div>
                    <div className="add-cart-btn">
                        <h6>add to cart</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card2;