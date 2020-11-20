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

        console.log('remove item', action.id )
        console.log('remove item' )
    }
    return state;
}

export default reducer;