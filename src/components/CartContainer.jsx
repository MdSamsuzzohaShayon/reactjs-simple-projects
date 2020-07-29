import React from 'react';
import { Container, Alert, Button } from "react-bootstrap";
import CartItem from './CartItem';
import "./Cart.css";

const CartContainer = ({cart = []}) => {
    if(cart.length === 0){
        return (
            <Container >
                <Alert variant="danger">
                    <h3 className="hf">Your cart is empty</h3>
                </Alert>
            </Container>
        );
    }
    return (
        <Container >
            <h2>Your bucket</h2>
            <br /><br />
            {cart.map(item => {
                return <CartItem className="hf" key={item.id} {...item} />;
            })}
            <br/>
            <hr/>
            <div className="cart-total">
                <h4 className="hf">Total = $0.00</h4>
            </div>
            <Button size="sm" variant="outline-danger" className="hf" >Clean the busket</Button>
        </Container>
    );
}


export default CartContainer;