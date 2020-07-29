import React from 'react';
import { Row, Col, Button, Image } from "react-bootstrap";

const CartItem = (props) => {
    return (
        <Row>
            <Col md={3}>
                <Image src={props.img} width="50px" rounded />
            </Col>
            <Col className="text-left" md={6}>
                <h4 className="hf" >{props.title}</h4>
    <h5 className="bf" >Price - ${props.price}</h5>
                <Button size="sm" variant="danger" className="hf" >Remove</Button>
            </Col >
            <Col md={3} >
                <Button variant="primary" className="bf">+</Button>
                <span className="bf" > Quantity {props.amount} </span>
                <Button variant="primary" className="bf">-</Button>
            </Col>
        </Row>
    );
}


export default CartItem;
