import React from 'react'
import "./Product.css"

function Product({title,location,rating,image}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>
                    <strong>{title}</strong>
                </p>

                <p className="product__location">{location}</p>
                <p> </p>
                <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=>(
                        <span>⭐</span>

                    ))
                }
            </div>

        </div>
            
         
            <img src={image} alt=""/>
            <button>Reserve/Order</button>
        
            
            
            
        </div>
    )
}
export default Product
