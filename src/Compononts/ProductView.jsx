import "./ProductView.css"
import sample1 from "../assets/2.jpg"
import { data, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import { productBase, orderbase } from "../utils";
import Products from "./Products";
const ProductView = () => {
    const [product, setProduct] = useState()
    const location = useLocation()
    const [showAddres, setShowAddres] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [errormsg, setErrorMsg] = useState()
    const [msg, setMsg] = useState()
    const [fullName, setFullName] = useState()
    const [addres, setAddres] = useState()
    const [city, setCity] = useState()
    const [district, setDistrict] = useState()
    const [phone, setPhone] = useState()
    const [pinCode, setPinCode] = useState()
    const navigate = useNavigate()
    const getProduct = async () => {
        const response = await axios.get(`${productBase}get-product/${location.pathname.split("/")[2]}`)
        response && response.data.success == true && response.data.product && setProduct(response.data.product)
    }
    const handleMakeOrder = async () => {
        const afterSucces = () => {
            setMsg("Order succussfully")
            setErrorMsg("")
            setTimeout(() => {
                navigate("/")
            }, 1000);
        }
        if (showAddres == false) {
            setShowAddres(true)
        }
        else {
            const response = await axios.post(`${orderbase}create-order`,
                {
                    "orderItems": [
                        { "product": location.pathname.split("/")[2], "quantity": quantity }
                    ],
                    fullName,
                    addres,
                    city,
                    district,
                    phone,
                    pinCode
                }, { withCredentials: true })
            response && response.data.success == false && setErrorMsg(response.data.message)
            console.log(response);

            response && response.data.success == true && afterSucces()
        }
    }
    useEffect(() => {
        getProduct()
    }, [])
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
                                {product && product[0].productPrice && <div className="orignal-price">Rs.{product[0].productPrice + (product[0].productPrice % 12)}</div>}
                            </div>
                            <div className="select-quantity">
                                <div onClick={() => { quantity == 1 ? setQuantity(1) : setQuantity(quantity - 1) }} className="sub">-</div>
                                <div className="number_of_quantity"> {quantity} </div>
                                <div onClick={() => { setQuantity(quantity + 1) }} className="add">+</div>
                            </div>
                            {

                                showAddres == true && <div className="addres">
                                    <h6 className="heading">Shipping addres</h6>
                                    <div className="input">
                                        <input value={fullName} onChange={(e) => { setFullName(e.target.value) }} type="text" placeholder="fullname" />
                                    </div>
                                    <div className="input">
                                        <input value={addres} onChange={(e) => { setAddres(e.target.value) }} type="text" placeholder="addres" />
                                    </div>
                                    <div className="input">
                                        <input value={city} onChange={(e) => { setCity(e.target.value) }} type="text" placeholder="city" />
                                    </div>
                                    <div className="input">
                                        <input value={district} onChange={(e) => { setDistrict(e.target.value) }} type="text" placeholder="district" />
                                    </div>
                                    <div className="input">
                                        <input value={phone} onChange={(e) => { setPhone(e.target.value) }} type="text" placeholder="phone" />
                                    </div>
                                    <div className="input">
                                        <input value={pinCode} onChange={(e) => { setPinCode(e.target.value) }} type="text" placeholder="pincode" />
                                    </div>
                                    <h6 className="heading">Order details</h6>
                                    <h6 className="details">Payment method : Cash On Delivery</h6>
                                    <h6 className="details">
                                        no of quantity :  {quantity}
                                    </h6>
                                    <h6 className="details">
                                        product price : Rs.{product[0].productPrice}
                                    </h6>
                                    <h6 className="details">
                                        shipping price : Rs.60
                                    </h6>
                                    <h6 className="details">
                                        total price : {(quantity * product[0].productPrice) + 60}
                                    </h6>
                                    {
                                        errormsg && <div className="error-msg">
                                            <h5>{errormsg}</h5>
                                        </div>
                                    }
                                    {
                                        msg && <div className="msg">
                                            <h5>{msg}</h5>
                                        </div>
                                    }
                                </div>
                            }
                            <div className="cart-price">
                                <div className="btn cart">
                                    <div className="cart-btn">Add to cart</div>
                                </div>
                                <div onClick={() => { handleMakeOrder() }} className="btn">Buy now</div>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductView;
