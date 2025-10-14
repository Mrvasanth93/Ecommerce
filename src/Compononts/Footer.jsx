import "./Footer.css"
import Services from "../Compononts/Services";
import chat from "../assets/icons/icons8-chat-50.png"
const Footer = () => {
   
    return (
        <>
            <Services />
            <div className="footer">
                <div className="footer-body">
                    <div className="footer-body-left">
                        <h4>Contact us</h4>
                        <h6>Fast Kart .</h6>
                        <h6>3/218 , Kumbakonam</h6>
                        <h6 className="c-email">mrvasanth93@gmail.com</h6>
                        <h4 className="c-mobile">(+91) 93454 88130</h4>
                    </div>
                    <div className="footer-body-right">
                        <div className="our-company">
                            <h4>Links</h4>
                            <h6>Fashion</h6>
                            <h6>Electronics</h6>
                            <h6>Bags</h6>
                            <h6>Footwear</h6>
                            <h6>Beauty</h6>
                        </div>
                        <div className="subscribe">
                            <h4>Get in touch</h4>
                            <h6>Subscribe to our latest offers , updates <br />and special discounts</h6>
                            <input type="text" className="subscribe-email" />
                            <div className="subscribe-btn">Subscribe</div>
                            <div className="tandc">
                                <input type="checkbox" name="" id="" />
                                <div  className="tandc-text"><h6>I agree the <span>terms and conditions</span> and the <span>privacy policy</span></h6></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;