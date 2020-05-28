import React from "react";
import '../css/ProductDetail.css';

const ProductDetail = ({name,price,quantity}) => {

    return (

            <div className="product-data">
                <h1 className="product-name">{name}</h1>
                <p className="product-info">Price: {price}<br/>Quantity: {quantity}</p>
            </div>
    )

}

export default ProductDetail;