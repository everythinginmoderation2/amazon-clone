import React from 'react'
import './Product.css'
import { useStateValue } from '../../StateProvider'

function Product({ id, title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the action into the data layer
        console.log(basket)
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }


    return (
        <div key={id} className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((i) => <i className="fas fa-star" style={{color: 'rgba(211, 139, 45, 0.6)'}}></i>)}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product