import React from "react";
import {Link} from 'react-router-dom'
import "./Producrcard.css"

function ProductCard({id, name, price, description, image})
{
    return (
        <div className="product-card">
            <img className="product-img"src={image}alt={name}/>
            <h2 className="name">{name}</h2>
            <h3 className="price">Price :  ₹ {price}</h3>
            <p className="description">{description}</p>
            <Link  className="shop-now"to={`/buy/${id}`}>Shop now</Link>

        </div>
    )
}
export default ProductCard