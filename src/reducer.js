import {CLEAR_CART, DECREASE, INCREASE, REMOVE} from "./actions";

function reducer(state, action) {
    if (action.type === CLEAR_CART) {
        return {...state, cart: []};
    }
    if (action.type === DECREASE) {
        console.log("decrease")
    }
    if (action.type === INCREASE) {
        console.log('INCREASE')
    }
    if (action.type === REMOVE) {
        return {...state,
                cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
        };
    }
    return state;
}

export default reducer;