import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({title,location,rating,image}) {
    const [{},dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                
                title: title,
                rating: rating,
                location: location,
                image : image,

            },
        })
    }
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
            <button onClick={addToBasket}>Reserve/Order</button>
           
        
            
            
            
        </div>
    )
}
export default Product
