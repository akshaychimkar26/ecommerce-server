// store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

// Create Redux store with combined reducers
const store = configureStore({
    reducer: rootReducer,
});

export default store;
