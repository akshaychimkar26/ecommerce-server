// cartAction.js
// cartAction.js
export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    };
};

export const incrementQuantity = (productId) => {
    return {
        type: 'INCREMENT_QUANTITY',
        payload: productId,
    };
};

// ... (other actions)


export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
});



export const decrementQuantity = (productId) => ({
    type: 'DECREMENT_QUANTITY',
    payload: productId,
});

export const removeIfZeroQuantity = (productId) => ({
    type: 'REMOVE_IF_ZERO_QUANTITY',
    payload: productId,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

