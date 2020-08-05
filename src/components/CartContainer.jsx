import React from 'react';
import { connect } from 'react-redux';
import { Container, Alert, Button } from "react-bootstrap";
import CartItem from './CartItem';
import { CLEAR_CART } from '../redux/actions';
import "./Cart.css";

const CartContainer = ({ cart = [], total, dispatch }) => {
    if (cart.length === 0) {
        return (
            <Container >
                <br/><br/>
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
            <br />
            <hr />
            <div className="cart-total">
                <h4 className="hf">Total = ${total}</h4>
            </div>
            <Button size="sm" variant="outline-danger" className="hf" onClick={()=>dispatch({type:CLEAR_CART})} >Clean the busket</Button>
        </Container>
    );
}



const mapStateToProps = (state) => {
    const { cart, total } = state;
    return {
        cart,
        total
    }
}



export default connect(mapStateToProps)(CartContainer);