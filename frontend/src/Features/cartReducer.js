// cartReducer.js
const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Check if the product is already in the cart
            const existingProduct = state.cart.find((item) => item.id === action.payload.id);

            if (existingProduct) {
                // If product is already in the cart, increment the quantity
                const updatedCart = state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });

                return { ...state, cart: updatedCart };
            } else {
                // If product is not in the cart, add it with quantity 1
                return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
            }

        case 'INCREMENT_QUANTITY':
            // Find the product in the cart and increment the quantity
            const updatedCart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });

            return { ...state, cart: updatedCart };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };

        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
                ),
            };
        case 'REMOVE_IF_ZERO_QUANTITY':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
            };
        default:
            return state;
    }
};

export default cartReducer;
