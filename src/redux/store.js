import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './reducer';

export const Store = configureStore({
    reducer:CartReducer
    
})

export default Store;