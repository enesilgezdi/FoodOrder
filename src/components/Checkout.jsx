import React, { useContext } from 'react'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../util/formatting';
import Modal from './UI/Modal';
import Input from './UI/Input';
import Button from './UI/Button';
import UserProgessContext from '../store/UserProgressContext';
import useHttp from '../hooks/useHttp';
import Error from './Error';

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },

}

const Checkout = () => {
    const cartCtx = useContext(CartContext);

    const userProgressCtx = useContext(UserProgessContext);

    const { data, isLoading: isSending, error, sendRequest, clearData } = useHttp('http://localhost:3000/orders', requestConfig);


    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price, 0
    )


    function handleClose() {
        userProgressCtx.hideCheckout();
    }

    function handleFinish() {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
    }

    async function checkoutAction(fd) {
        const customerData = Object.fromEntries(fd.entries());

        await sendRequest(
            JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: customerData
                },
            })
        );
    }

    let actions = (
        <>
            <Button type="button" textOnly onClick={handleClose}>Close</Button>
            <Button>Submit Order</Button>
        </>
    );

    if (isSending) {
        actions = <span>Sending order data...</span>
    }

    if (data && !error) {
        return (
            <Modal
                open={userProgressCtx.progress === "checkout"}
                onClose={handleFinish}>
                <h2>Success!</h2>
                <p>Your order was submitted successfully!</p>
                <p className='modal-actions'>
                    <Button onClick={handleFinish}>Okay</Button>
                </p>
            </Modal>
        );
    }

    return (
        <Modal
            open={userProgressCtx.progress === "checkout"}
            onClose={userProgressCtx.progress === "checkout" ? handleClose : null}>
            <form action={checkoutAction}>
                <h2>Checkout</h2>
                <p>Total amount : {currencyFormatter.format(cartTotal)}</p>

                <Input label="Full name" type="text" id="name" />
                <Input label="E-mail Adress" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
                <div className='control-row'>
                    <Input label="Postal Code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />
                </div>


                {error && <Error title="Failed to  submit Orders" message={error.message} />}
                <p className='modal-actions'>
                    {actions}
                </p>
            </form>
        </Modal>
    )
}

export default Checkout
