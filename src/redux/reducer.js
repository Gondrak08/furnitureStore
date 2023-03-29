import { createSlice } from "@reduxjs/toolkit";


const initialState={
    list:[],
    toggleCart:false,
}

const cartSlice = createSlice({
    name:'shoppingcart',
    initialState:initialState,
    reducers:{
        addCart(state,action){
        
        },
        toggleCart(state, action){
            state.toggleCart = action.payload;
        }
    }
});

export const {toggleCart} = cartSlice.actions;
export default cartSlice.reducer;