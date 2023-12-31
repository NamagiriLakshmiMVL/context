import React, { useState } from "react";
import { IconButton, Button } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";


function Product({ id, product, onAddCart }) {
    const [show, setShow] = useState(true);


    const styles = {

        color: product.rating > 4.5 ? "green" : "red"
    };
    const navigate = useNavigate();

    return (

        <div className='product-container'>
            <img className='product-poster' src={product.thumbnail} alt={product.title} />
            <div className='product-spec'>
                <h3 className='product-name'>{product.title} - {id}</h3>
                <p style={styles} className='product-rating'>⭐{product.rating}</p>
            </div>

            <IconButton aria-label="toggleBtn" color="primary" onClick={() => setShow(!show)}>
                {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton aria-label="infoBtn" color="primary">
                <InfoIcon />
            </IconButton>
            {show ? <p className='product-summary'>{product.description}</p> : null}
            <div className='priceStyle'>
                <p className='product-price'>Price: {product.price}</p>
                <Button variant="contained" color="success" size="small" onClick={() => (onAddCart(product) , navigate("/cart"))}>Add to Cart</Button>

            </div>

        </div>
    )
}

export default Product