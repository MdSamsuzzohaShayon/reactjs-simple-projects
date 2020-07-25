import React, { useState } from 'react';
import './Cart.css';




const circle =(quantity) =>{
    return (
        <span className="circle">
            {quantity}
        </span>
    );
}

function Menu({addToCart , quantity}) {
    return (
        <div className="menu">
            <div className="items">
                <ul className="item-1">
                    <li><a href="#">Gift cart</a></li>
                    <li><a href="#">fashion</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Mobile</a></li>
                </ul>
                <ul className="item-2">
                    <li><a href="#">Cart
                    <img src="../icon/shopping-cart.svg" width="20px" alt="" />
                    {addToCart == true? circle(quantity) : null}
                    </a></li>
                    <li><a href="#"> <strong>En</strong> / বাংলা</a></li>
                </ul>

            </div>
        </div>
    );
}

function Cart() {
    const [generalPrice, setGeneralPrice] = useState(13);
    console.log(generalPrice);

    const [quantity, setQuantity] = useState(1);
    const [coupon, setCoupon] = useState(5);

    const [totalPrice, setTotalPrice] = useState(generalPrice);
    const [addToCart, setAddToCart] = useState(false);





    function incrementQuantity() {
        setQuantity(prevQuan => prevQuan + 1);
        setTotalPrice(prevTotalPrice => prevTotalPrice + generalPrice);
    }
    function decrementQuantity() {
        setQuantity(prevQuan => prevQuan - 1);
        setTotalPrice(prevTotalPrice => prevTotalPrice - generalPrice);
    }
    function usingCoupon(e) {
        e.preventDefault();
        console.log(e.target.value);
        if (e.target.value == 123) {
            console.log("you get the discount");
            setCoupon(prevCoupon => prevCoupon);
            setTotalPrice(prevTotalPrice => prevTotalPrice - coupon * quantity);
        }
    }



    function handleClick(e) {
        e.preventDefault();
        setAddToCart(prevAddToCart => prevAddToCart = true);
    }





    return (
        <div>
            <div className="Cart">
                <Menu addToCart={addToCart} quantity={quantity} />
                <br />
                <br />
                <br />
                <div className="box">
                    <div className="image"><img src="https://cdn.shopify.com/s/files/1/1274/3483/products/AJ5553-411-PHSFH001-2000_10bc456b-92eb-493b-a2d2-c589e47245fb.png" alt="" /></div>
                    <div className="detail">
                        <div className="title">PSG</div>
                        <div className="desc">Paris Saint-Germain Football Club, commonly referred to as Paris Saint-Germain, Paris SG, or simply Paris or PSG, is a French professional football club based in Paris.</div>
                    </div>
                    <div className="set-quan set-bg">
                        <div className="quantaty">Quantity {quantity}</div>
                        <div className="btns">
                            <button className="btn" onClick={incrementQuantity}>+</button>
                            <button className="btn" onClick={decrementQuantity}>-</button>
                        </div>
                    </div>
                    <div className="price">
                        <div className="gp">General Price {generalPrice}$</div>
                        <div className="coupon set-bg">
                            Use Coupon
                            <form>
                                <input onChange={usingCoupon} type="text" placeholder="Use coupon code" />
                            </form>
                        </div>
                        <div className="total-price">Total price {totalPrice}$</div>
                    </div>
                    <div className="add set-bg">
                        <button className="btn" onClick={handleClick} >Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;

