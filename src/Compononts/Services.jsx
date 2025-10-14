import "./Services.css"
import service1 from "../assets/icons/icons8-shipping-50.png"
import service2 from "../assets/icons/icons8-return-64.png"
import service3 from "../assets/icons/icons8-payment-50.png"
import service4 from "../assets/icons/icons8-gift-24.png"
import service5 from "../assets/icons/icons8-support-50.png"
const Services = () =>{
    return(
        <>
            <div className="services">
                <div className="services-body">
                    <div className="service1">
                        <div className="service-img"><img src={service1} alt="" /></div>
                        <div className="service-title">Free Shipping</div>
                        <div className="content">For all orders over $100</div>
                    </div>
                    <div className="service2">
                        <div className="service-img"><img src={service2} alt="" /></div>
                        <div className="service-title">30 Days Return</div>
                        <div className="content">For all orders over $100</div>
                    </div>
                    <div className="service3">
                        <div className="service-img"><img src={service3} alt="" /></div>
                        <div className="service-title">Secured Payment</div>
                        <div className="content">For all orders over $100</div>
                    </div>
                    <div className="service4">
                        <div className="service-img"><img src={service4} alt="" /></div>
                        <div className="service-title">Special Gifts</div>
                        <div className="content">For all orders over $100</div>
                    </div>
                    <div className="service5">
                        <div className="service-img"><img src={service5} alt="" /></div>
                        <div className="service-title">Support 24/7</div>
                        <div className="content">For all orders over $100</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;