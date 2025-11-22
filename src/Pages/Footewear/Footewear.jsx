import { useState } from "react";
import Card2 from "../../Compononts/Cards/Card2";
import samplelogo from "../../assets/icons/icons8-cart-24.png"
import "../pageCommon.css"
import { useEffect } from "react";
import { productBase } from "../../utils";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const FootWear = () => {
    const [popularProducts, setPopularProducts] = useState()
    const navigate = useNavigate()
    const handleNavigate = (path) =>{
        navigate(path)
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
        handleGetProducts()
    },[])
    return (
        <>
            <div className="sort">
                <div className="sort-container">
                    <div className="right">
                        Sort By : <div className="sorts">Name , A to z</div>
                    </div>
                </div>
            </div>
            <div className="fashion">
                {popularProducts && popularProducts.map((data)=>{ return data.category == "Footwear" && <Card2 data={data}/>})}
            </div>
        </>
    )
}

export default FootWear;