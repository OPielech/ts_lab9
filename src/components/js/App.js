import React, {Component} from 'react';
import '../css/App.css';
import ProductDetail from './ProductDetail';
import ProductList from "./ProductList";

class App extends Component {
    render() {
        return (
            <section className="App">
                <div className="product-view">
                    <ProductList/>
                </div>
            </section>
        )
    }

    constructor(props) {
        super(props);

    }

}

const product = {
    name: "blender",
    price: "12",
    quantity: "1"
}

export default App;
