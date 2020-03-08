import React, { useContext } from "react";
import ProductContext from "../contexts/ProductContexts";

// Components
import Product from "./Product";

const Products = props => {
  const { products, addItem, removeItem } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          addItem={addItem}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
};

export default Products;
