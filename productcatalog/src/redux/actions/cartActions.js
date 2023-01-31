export const ADD_TO_CART="ADD_TO_CART"
export const DELETE_TO_CART="DELETE_TO_CART"

export function addToCart(cartItem){
    return function(dispacth){
        return dispacth({type:ADD_TO_CART,payload:cartItem})
    }
}
export function deleteToCart(cart){
    return function(dispacth){
        return dispacth({type:DELETE_TO_CART,payload:cart})
    }
    
}