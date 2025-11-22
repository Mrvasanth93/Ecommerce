import "./MyOrders.css"
import sample from '../../assets/new/Laptop Backpack.webp'
import { useEffect, useRef, useState } from "react"
import { orderbase } from "../../utils"
import axios from "axios"
const MyOrders = () => {
    const statusbar = useRef()
    const [showdetails, setShowDetails] = useState([false, false, false])
    const [showdetailsText, setShowDetailsText] = useState("View Details")
    const [orders,setOrders] = useState()
    const changeView = (index) => {
        showdetailsText == "View Details" ? setShowDetailsText("Less Details") : setShowDetailsText("View Details")
    }
    useEffect(() => {
        if (showdetails == true) statusbar.current.style.width = "50%"
    })
    const getMyOrders = async () => {
        const response = await axios.get(`${orderbase}my-orders`, { withCredentials: true })
        response && response.data.success == false && response.data.message == "continue with login" && handleNavigate("/login")
        response && response.data.success == false && response.data.message == "cannot find user" && handleNavigate("/login")
        response && response.data.success == false && response.data.message == "un Authorized token" && handleNavigate("/login")
        response && response.data.success == true && response.data.orders && setOrders(response.data.orders)
    }
    useEffect(() => {
        getMyOrders()
    }, [])
    return (
        <div className="order">
            <div className="order-container">
                <h5 className="title">My orders</h5>
                {console.log(orders)}
                {
                    orders && orders.map((data, i) => {
                        console.log(i);
                        return <div className="product">
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
                                        <h6 onClick={() => { changeView(i) }}>{showdetailsText}</h6>
                                        <h6>cancel order</h6>
                                    </div>
                                </div>
                            </div>
                            {
                                showdetails[i] == true && <div className="bottom">
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
                    })
                }
            </div>
        </div>
    )
}
export default MyOrders