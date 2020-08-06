import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from "./actions";



// REDUCER
const reducer = (state, action) => {
    // if(action.type=== CLEAR_CART){
    //     return{
    //         ...state,
    //        cart:[] 
    //     }
    // }
    // return state;


    switch (action.type) {
        case CLEAR_CART:
            console.log("You cleared the cart");
            return {
                ...state,
                cart: []
            }
        case DECREASE:
            console.log("You decrease the cart");
            let tempCartDecrease = [];
            if (action.payload.amount === 1) {
                console.log("Hey it's one");
                tempCartDecrease= state.cart.filter(cartItem => cartItem.id !== action.payload.id);
            } else {
                    tempCartDecrease = state.cart.map((cartItem) => {
                    console.log("cart item", cartItem);
                    if (cartItem.id === action.payload.id) {
                        cartItem = { ...cartItem, amount: cartItem.amount - 1 }
                    }
                    return cartItem;
                });
            }
            return {
                ...state,
                cart: tempCartDecrease
            }
        case INCREASE:
            console.log("You increased the cart");
            let tempCartIncrease = state.cart.map((cartItem) => {
                console.log("cart item", cartItem);
                if (cartItem.id === action.payload.id) {
                    cartItem = { ...cartItem, amount: cartItem.amount + 1 }
                }
                return cartItem;
            });
            return {
                ...state,
                cart: tempCartIncrease
            }
        case REMOVE:
            console.log("You removed the cart");
            console.log("action.payload.id ", action.payload.id);
            return {
                ...state,
                cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state;
    }
}



/*
// REDUCER
const reducer = (state, action) => {
    if(action.type=== CLEAR_CART){
        return{
            ...state,
           cart:[] 
        }
    }
    return state;
}
*/



export default reducer;