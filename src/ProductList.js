import { PRODUCT_LIST } from "./App";
import React, { useContext } from "react";
import Product from "./Product";
import { UserContext } from "./Context"; 


function ProductList(){
    const productList = PRODUCT_LIST;
    const data = useContext(UserContext)   //using Context
    const handleCart = (product) => {
        data.setCart([...data.cart, product]);
      };
return(
    <div>
         <div className='product-list'>
        {productList.map((product, index) => (
          <Product key={product.id} product={product} id={product.id} onAddCart={handleCart}/>
        ))}
        </div>
    </div>
)
}

export default ProductList