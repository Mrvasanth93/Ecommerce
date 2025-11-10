import "./ProductView.css"
import sample1 from "../assets/2.jpg"
import { data, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import { productBase } from "../utils";
import Products from "./Products";
const ProductView = () => {
    const [product,setProduct] = useState()
    const [popularProducts, setPopularProducts] = useState()
    const location = useLocation()
    const getProduct = async()=>{
        const response = await axios.get(`${productBase}get-product/${location.pathname.split("/")[2]}`)
        response && response.data.success == true && response.data.product && setProduct(response.data.product)
        
    }
    const handleGetProducts = async () => {
        try {
            const response = await axios.get(`${productBase}get-products`)
            response && response.data.success == false && response.data.no_of_products == 0 && console.log("create try again page");
            response && response.data.success == false && response.data.message == "cannot get products" && console.log("create server error page");
            response && response.data.success == false && response.data.error && console.log("create server error page");
            response && response.data.success == true && response.data.products && setPopularProducts(response.data.products)

        } catch (error) {
            error.message == "Network Error" && console.log("create server error page");
        }
    }
    useEffect(()=>{
        getProduct()
    })
    useEffect(()=>{
        handleGetProducts()
    })
    return (
        <>
            {console.log(product)
            }
            <div className="productview">
                <div className="productview-container">
                    <div className="back-btn">
                        <h6>&lt;</h6>
                    </div>
                    <div className="product-content">
                        <div className="product-content-img">
                            {product && product[0].image && <img src={`https://fastkart-backend.onrender.com/uploads/${product[0].image}`} alt="" />}
                        </div>
                        <div className="product-content-content">
                            <div className="product-name">
                                {product && product[0].productName && <h4>{product[0].productName}</h4>}
                            </div>
                            <div className="product-ratings">
                                <h5>⭐⭐⭐⭐⭐</h5>
                                <h5 className="rate-txt">Ratings (30)</h5>
                            </div>
                            <div className="product-desc">
                                <h5 className="desc">Description</h5>
                                {product && product[0].productDescription && <h6 className="desc">{product[0].productDescription}</h6>}
                            </div>
                            <div className="size-ram">
                                Size  <div className="types">
                                    <div>S</div>
                                    <div>M</div>
                                    <div>L</div>
                                </div>
                            </div>
                            <div className="service">
                                Free shipping available in this product
                            </div>
                            <div className="price">
                                {product && product[0].productPrice && <div className="offer-price">Rs.{product[0].productPrice}</div>}
                                {product && product[0].productPrice && <div className="orignal-price">Rs.{product[0].productPrice + (product[0].productPrice%12)}</div>}
                            </div>
                            <div className="select-quantity">
                                <div className="sub">-</div>
                                <div className="number_of_quantity"> 1 </div>
                                <div className="add">+</div>
                            </div>
                            <div className="cart-price">
                                <div className="btn cart">
                                    <div className="cart-btn">Add to cart</div>
                                </div>
                                <div className="btn">Buy now</div>
                            </div>
                            <div className="review">
                                <h4>Reviews</h4>
                                <div className="review-container">
                                    <div className="profile-logo">
                                        N
                                    </div>
                                    <h3>⭐⭐⭐⭐⭐</h3>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestiae?</h5>
                                    <hr />
                                </div>
                                <div className="review-container">
                                    <div className="profile-logo">
                                        N
                                    </div>
                                    <h3>⭐⭐⭐⭐⭐</h3>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestiae?</h5>
                                    <hr />
                                </div>
                                <div className="review-box">
                                    <div className="select-rate">
                                        <select name="" id="">
                                            <option value="">1.0</option>
                                            <option value="">2.0</option>
                                            <option value="">3.0</option>
                                            <option value="">4.0</option>
                                            <option value="">5.0</option>
                                        </select>
                                    </div>
                                    <div className="message">
                                        <input maxLength={40} type="text" placeholder="Write something" />
                                    </div>
                                    <div className="review-btn">add</div>
                                </div>
                            </div>
                            {popularProducts && product[0].category && <Products isMuted={true} title={product[0].category} data={popularProducts}/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductView;
