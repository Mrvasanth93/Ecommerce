import { useRef } from "react";
import Card1 from "../Compononts/Cards/Card1";
import "./PopularProducts.css"
const Products = (probs) => {
    const scrollRate = useRef()
    const handleScroll = (option) =>{
        if(option == "left"){
            scrollRate.current.scrollLeft -= 320
        }
        else if(option == "right"){
            scrollRate.current.scrollLeft += 320
        }
    }
    return (
        <>
            <div className="products">
            <h6 className="title">{probs.title}</h6>
            <h6 className="offer-text">Do not miss the current offers untill the end of march</h6>
                <div className="nav-btns">
                    <div onClick={(e)=>{handleScroll("left")}} className="navleft">&lt;</div>
                    <div onClick={(e)=>{handleScroll("right")}} className="navright">&gt;</div>
                </div>
                <div ref={scrollRate} className="popular-products">
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                </div>
            </div>
        </>
    )
}
export default Products;