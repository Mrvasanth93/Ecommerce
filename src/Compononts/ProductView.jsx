import "./ProductView.css"
import sample1 from "../assets/2.jpg"
const ProductView = () => {
    return (
        <>
            <div className="productview">
                <div className="productview-container">
                    <div className="back-btn">
                        <h6>&lt;</h6>
                    </div>
                    <div className="product-content">
                        <div className="product-content-img">
                            <img src={sample1} alt="" />
                        </div>
                        <div className="product-content-content">
                            <div className="product-name">
                                <h4>Men Casual shirt</h4>
                            </div>
                            <div className="product-ratings">
                                <h5>⭐⭐⭐⭐⭐</h5>
                                <h5 className="rate-txt">Ratings (30)</h5>
                            </div>
                            <div className="product-desc">
                                <h5 className="desc">Description</h5>
                                <h6 className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, temporibus laudantium doloremque non nemo consequatur quis perspiciatis minus corporis sint, voluptate nam ducimus in? Blanditiis eaque quisquam commodi dolorum sequi.</h6>
                            </div>
                            <div className="size-ram">
                                Size  <div className="types">
                                    <div>S</div>
                                    <div>M</div>
                                    <div>L</div>
                                </div>
                            </div>
                            <div className="service">
                                Free shipping available in this product
                            </div>
                            <div className="price">
                                <div className="offer-price">$ 29.99</div>
                                <div className="orignal-price">$ 39.99</div>
                            </div>
                            <div className="add-to-cart">
                                <div className="order-number">
                                    <div className="order-add">-</div>
                                    <div className="num">1</div>
                                    <div className="order-sub">+</div>
                                </div>
                                <div className="add-to-cart-btn">
                                    add to cart
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-content-bottom">
                        <div className="bottom-content"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductView;