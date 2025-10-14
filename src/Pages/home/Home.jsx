import "./Home.css"
import curosel1 from "../../assets/curosel1.jpg"
import curosel2 from "../../assets/curosel2.jpg"
import curosel3 from "../../assets/curosel3.jpg"
import category1 from "../../assets/category-1.png"
import category2 from "../../assets/category-2.png"
import category3 from "../../assets/category-3.png"
import category4 from "../../assets/category-4.png"
import category5 from "../../assets/category-5.png"
import category6 from "../../assets/category-6.png"
import category7 from "../../assets/category-7.png"
import category8 from "../../assets/category-8.png"
import Products from "../../Compononts/Products"
import { useEffect, useState } from "react"
import Services from "../../Compononts/Services"
import Curosel from "../../Compononts/Curosel"
import Banner from "../../Compononts/Banner"
import { useNavigate } from "react-router-dom"

const Home = () =>{
    const navigate = useNavigate()
    const handleNavigate = (locateTo) =>{
        navigate(locateTo)
    }
    const [curoselImages,setCuroselImages] = useState([curosel1,curosel2,curosel3])
    const [currentImage,setCurrentImage] = useState(0);
    useEffect(()=>{
        const intervel = setInterval(() => {
            currentImage == 2 ? setCurrentImage(0) : setCurrentImage(currentImage+1) 
        }, 3000);
        return () => clearInterval(intervel)
    })
    const moveNext = (nav) =>{
        if(nav == "right"){
            currentImage == 2 ? setCurrentImage(0) : setCurrentImage(currentImage+1) 
        }
        else if(nav == "left"){
            currentImage == 0 ? setCurrentImage(2) : setCurrentImage(currentImage-1) 
        }
    }
    return(
        <>
            <div className="home">
                <div className="navprevnext">
                    <div className="prev" onClick={()=>{moveNext("left")}}>&lt;</div>
                    <div className="next" onClick={()=>{moveNext("right")}}>&gt;</div>
                </div>
                <div  className="curosel">
                    <img src={curoselImages[currentImage]} alt="" />
                </div>
            </div>
            <div className="home-categories">
                <div onClick={()=>{handleNavigate("/fashion")}} className="home-category category1">
                    <div className="category-img"><img src={category3} alt="" /></div>
                    <div  className="category-name">Fashion</div>
                </div>
                <div onClick={()=>{handleNavigate("/electronics")}} className="home-category category2">
                    <div className="category-img"><img src={category4} alt="" /></div>
                    <div className="category-name">Electronics</div>
                </div>
                <div onClick={()=>{handleNavigate("/bags")}} className="home-category category3">
                    <div className="category-img"><img src={category2} alt="" /></div>
                    <div className="category-name">Bags</div>
                </div>
                <div onClick={()=>{handleNavigate("/footwear")}} className="home-category category4">
                    <div className="category-img"><img src={category8} alt="" /></div>
                    <div className="category-name">Footwear</div>
                </div>
                <div onClick={()=>{handleNavigate("/beauty")}} className="home-category category5">
                    <div className="category-img"><img src={category1} alt="" /></div>
                    <div className="category-name">Beauty</div>
                </div>
                <div onClick={()=>{handleNavigate("/wellness")}} className="home-category category6">
                    <div className="category-img"><img src={category7} alt="" /></div>
                    <div className="category-name">Wellness</div>
                </div>
                <div onClick={()=>{handleNavigate("/jwells")}} className="home-category category7">
                    <div className="category-img"><img src={category6} alt="" /></div>
                    <div className="category-name">Jewellery</div>
                </div>
            </div>
            <Products title="Popular Products"/>
            <Curosel imgName={["curosel1","curosel2"]} />
            <Products title="fashion"/>
            <Products title="Electroics"/>
            <div className="services-ad">
                <div className="ad">
                    <h5>Free Shipping</h5>
                    <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam officiis incidunt saepe?</h6>
                    <h5>~ Only $200</h5>
                </div>
            </div>
            <Products title="Bags"/>
            <Banner/>
            <Products title="Footwear"/>
            <Products title="Beauty"/>
        </>
    )
}

export default Home;