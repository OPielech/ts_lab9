import React from "react";
import '../css/ProductList.css'
import ProductDetail from "./ProductDetail";
import {productsArray} from "../../ProductsArray";

const ProductList = () => {
    const cells = productsArray.map(productDetail => {
        return (
            <ProductDetail
                name={productDetail.name}
                price={productDetail.price}
                quantity={productDetail.quantity}
            />
        );
    });

    return (
        <section className="product-list">
            {cells}
        </section>
    )
}

export default ProductList;
