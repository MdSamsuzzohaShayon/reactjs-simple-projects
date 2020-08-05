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
            return{

            }
        case INCREASE:
            console.log("You increased the cart");
            return{

            }
        case REMOVE:
            console.log("You removed the cart");
            console.log("action.payload.id ",action.payload.id);
            return{
                ...state,
                cart: state.cart.filter(cartItem=>cartItem.id !== action.payload.id)
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