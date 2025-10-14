import { useState } from "react";
import Card2 from "../../Compononts/Cards/Card2";
import samplelogo from "../../assets/icons/icons8-cart-24.png"
import "../pageCommon.css"
import { useEffect } from "react";
const Bags = () => {
    const [view,setView] = useState("table")
    const handleView = (view) =>{
        if(view == "table"){
            setView("table")
        }
        else if(view == "grid"){
            setView("grid")
        }
    }
    useEffect(()=>{
    },[view])
    return (
        <>
            <div className="sort">
                <div className="sort-container">
                    <div className="left">
                        <div onClick={()=>{handleView("table")}}>
                            <img src={samplelogo} alt="" />
                        </div>
                        <div onClick={()=>{handleView("grid")}}>
                            <img src={samplelogo} alt="" />
                        </div>
                    </div>
                    <div className="right">
                        Sort By : <div className="sorts">Name , A to z</div>
                    </div>
                </div>
            </div>
            <div className="fashion">
                <Card2 width={view}/>
                <Card2 width={view}/>
                <Card2 width={view}/>
                <Card2 width={view}/>
            </div>
        </>
    )
}

export default Bags;