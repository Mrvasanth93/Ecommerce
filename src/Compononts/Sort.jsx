import "./Sort.css"
import table from "../assets/icons/table-view.png"
import grid from "../assets/icons/grid-view.png"
const SortBy = ()=>{
    return(
        <>
            <div className="sort">
                <div className="sort-container">
                    <div className="left">
                        <div>
                            <img src={grid} alt="" />
                        </div>
                        <div>
                            <img src={table} alt="" />
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