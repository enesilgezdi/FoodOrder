import React, { useContext } from 'react'
import { currencyFormatter } from '../util/formatting.js'
import Button from './UI/Button.jsx'
import CartContext from '../store/CartContext.jsx'
const MealItem = ({ meal }) => {
    const cardCtx = useContext(CartContext);


    function handleAddMealToCart() {
        cardCtx.addItem(meal)
    }

    return (
        <li className='meal-item'>
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt="" />
                <div>
                    <h3>{meal.name}</h3>
                    <p className='meal-item-price '>{currencyFormatter.format(meal.price)}</p>
                    <p className='meal-item-description'>{meal.description}</p>
                </div>
                <p className='meal-item-actions'>
                    <Button onClick={handleAddMealToCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
    )
}

export default MealItem