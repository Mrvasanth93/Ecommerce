import "./MyOrders.css"
import sample from '../../assets/new/Laptop Backpack.webp'
import { useEffect, useRef, useState } from "react"
const MyOrders = () => {
    const statusbar = useRef()
    const [showdetails, setShowDetails] = useState(false)
    const [showdetailsText,setShowDetailsText] = useState("View Details")
    const changeView = ()=>{
        setShowDetails(!showdetails)
        showdetailsText == "View Details" ? setShowDetailsText("Less Details") : setShowDetailsText("View Details")
    }
    useEffect(() => {
        if(showdetails == true) statusbar.current.style.width = "50%"
    })
    return (
        <div className="order">
            <div className="order-container">
                <h5 className="title">My orders</h5>
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
                            <div className="options">
                                <h6 onClick={() => {changeView()}}>{showdetailsText}</h6>
                                <h6>cancel order</h6>
                            </div>
                        </div>
                    </div>
                    {
                        showdetails == true && <div className="bottom">
                            <div className="title">order status</div>
                            <div ref={statusbar} className="status-bar"></div>
                            <div className="status-text">
                                <div>order <br /> accepted</div>
                                <div>out of <br /> delivery</div>
                                <div>deliverd</div>
                            </div>
                            <h6 className="heading">Order details</h6>
                            <h6 className="details">Payment method : Cash On Delivery</h6>
                            <h6 className="details">
                                no of quantity :
                            </h6>
                            <h6 className="details">
                                product price : Rs.
                            </h6>
                            <h6 className="details">
                                shipping price : Rs.60
                            </h6>
                            <h6 className="details">
                                total price :
                            </h6>
                        </div>
                    }
                </div>
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
                            <div className="options">
                                <h6 onClick={() => {changeView()}}>{showdetailsText}</h6>
                                <h6>cancel order</h6>
                            </div>
                        </div>
                    </div>
                    {
                        showdetails == true && <div className="bottom">
                            <div className="title">order status</div>
                            <div ref={statusbar} className="status-bar"></div>
                            <div className="status-text">
                                <div>order <br /> accepted</div>
                                <div>out of <br /> delivery</div>
                                <div>deliverd</div>
                            </div>
                            <h6 className="heading">Order details</h6>
                            <h6 className="details">Payment method : Cash On Delivery</h6>
                            <h6 className="details">
                                no of quantity :
                            </h6>
                            <h6 className="details">
                                product price : Rs.
                            </h6>
                            <h6 className="details">
                                shipping price : Rs.60
                            </h6>
                            <h6 className="details">
                                total price :
                            </h6>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default MyOrders