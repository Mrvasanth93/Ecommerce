import "./Serch.css"
import serchIcon from "../../assets/icons/icons8-find-30.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import Card2 from "../../Compononts/Cards/Card2";
import "../pageCommon.css"
import { useEffect } from "react";
import axios from "axios";
import { productBase } from "../../utils";
const Serch = () => {
    const [keyword, setKeyWord] = useState()
    const [popularProducts, setPopularProducts] = useState()
    const handleGetProducts = async (val) => {
        try {
            const response = await axios.get(`${productBase}serch/${val}`, { withCredentials: true })
            response && response.data.success == false && response.data.no_of_products == 0 && console.log("create try again page");
            response && response.data.success == false && response.data.message == "cannot get products" && console.log("create server error page");
            response && response.data.success == false && response.data.error && console.log("create server error page");
            response && response.data.success == true && response.data.products && setPopularProducts(response.data.products)
        } catch (error) {
            console.log(response);
            error.message == "Network Error" && console.log("create server error page");
        }
    }
    useEffect(() => {
    }, [keyword])
    return (
        <>
            <div className="serch-container">
                <div className="serch-bar">
                    <div className="nav-1-middle">
                        <div className="serch-box">
                            <input onChange={(e) => { handleGetProducts(e.target.value);setKeyWord(e.target.value) }} placeholder="Serch for Products...." type="text" />
                        </div>
                        <div onClick={() => { handleGetProducts(); }} className="serch-icon">
                            <img src={serchIcon} alt="" />
                        </div>
                    </div>
                </div>
                <div className="fashion">
                    {keyword && popularProducts && popularProducts.map((data) => { return <Card2 data={data} /> })}
                </div>
            </div>
        </>
    )
}

export default Serch