import "./Sort.css"
import samplelogo from "../assets/icons/table-view.png"
const SortBy = ()=>{
    return(
        <>
            <div className="sort">
                <div className="sort-container">
                    <div className="left">
                        <div>
                            <img src={samplelogo} alt="" />
                        </div>
                        <div>
                            <img src={samplelogo} alt="" />
                        </div>
                    </div>
                    <div className="right">
                        Sort By : <div className="sorts">Name , A to z</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SortBy;