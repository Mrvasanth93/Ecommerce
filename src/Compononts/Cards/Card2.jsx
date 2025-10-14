import "./Card2.css"
import sample1 from "../../assets/img1.jpg"
import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
const Card2 = (view) => {
    const getHeight = useRef();
    const path = useLocation();
    const navigate = useNavigate()
    const openProduvtView = () =>{
        navigate(`${path.pathname}/product-id`)
    }
    useEffect(() => {
        if (view.width == "table") {
            getHeight.current.childNodes[0].style.paddingBottom = "50px"
            getHeight.current.childNodes[0].style.flexDirection = "row"
            getHeight.current.childNodes[0].childNodes[2].style.position = "absolute"
            getHeight.current.childNodes[0].childNodes[2].style.bottom = "0"
            getHeight.current.childNodes[0].childNodes[1].childNodes[0].style.margin = "0px"
            getHeight.current.childNodes[0].childNodes[1].childNodes[1].style.margin = "0px"
            getHeight.current.childNodes[0].childNodes[1].childNodes[2].style.margin = "0px"

        }
        else if (view.width == "grid") {
            getHeight.current.childNodes[0].style.paddingBottom = "0px"
            getHeight.current.childNodes[0].style.flexDirection = "column"
            getHeight.current.childNodes[0].childNodes[2].style.position = ""
            getHeight.current.childNodes[0].childNodes[2].style.bottom = ""
            getHeight.current.childNodes[0].childNodes[1].childNodes[0].style.margin = "10px 0px"
            getHeight.current.childNodes[0].childNodes[1].childNodes[1].style.margin = "10px 0px"
            getHeight.current.childNodes[0].childNodes[1].childNodes[2].style.margin = "10px 0px"
        }
    }, [view.width])
    return (
        <>
            <div onClick={() => { openProduvtView() }} ref={getHeight} className="card2">
                <div className="card2-container">
                    <div className="card-top">
                        <div className="product-img">
                            <img src={sample1} alt="" />
                        </div>
                    </div>
                    <div className="product-content">
                        <h4 className="product-name">Men Casual Shirt</h4>
                        <h6 className="product-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus recusandae facere minima aliquam magni.
                        </h6>
                        <h6 className="ratings">
                            ⭐⭐⭐⭐⭐
                        </h6>
                        <div className="price">
                            <h5 className="offer-price">
                                $ 29.00
                            </h5>
                            <h6 className="orignal-price">$ 39.00</h6>
                        </div>
                    </div>
                    <div className="add-to-cart">
                        <h6>add to cart</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card2;