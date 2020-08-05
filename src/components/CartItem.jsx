import React from 'react';
import {connect} from 'react-redux';
import { Row, Col, Button, Image } from "react-bootstrap";

import {INCREASE, DECREASE, REMOVE} from '../redux/actions';

const CartItem = (props) => {
    return (
        <Row>
            <Col md={3}>
                <Image src={props.img} width="50px" rounded />
            </Col>
            <Col className="text-left" md={6}>
                <h4 className="hf" >{props.title}</h4>
    <h5 className="bf" >Price - ${props.price}</h5>
                <Button size="sm" variant="danger" onClick={()=>props.remove()} className="hf" >Remove</Button>
            </Col >
            <Col md={3} >
                <Button variant="primary" className="bf">+</Button>
                <span className="bf" > Quantity {props.amount} </span>
                <Button variant="primary" className="bf">-</Button>
            </Col>
        </Row>
    );
}


const mapDispatchToProps=(dispatch, ownProps)=>{
    console.log("own props ", ownProps);
    const {id} = ownProps;
    console.log("ID:", id);
    return{
        remove: ()=>dispatch({type:REMOVE, payload: {id}})
    }
}


export default connect(null, mapDispatchToProps)(CartItem);
