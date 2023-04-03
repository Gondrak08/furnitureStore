import { createSlice } from "@reduxjs/toolkit";
import { Zoom } from "swiper";


const initialState={
    list:[],
    toggleCart:false,
}

const cartSlice = createSlice({
    name:'shoppingcart',
    initialState:initialState,
    reducers:{
        toggleCart(state, action){
            state.toggleCart = action.payload;
        },

        addCart(state,action){
            let index = state.list.findIndex(item=>item.productId === action.payload.productId);
            if(state.list.length === 0){
                state.list.push(action.payload);
            } else if(state.list.length > 0){
                if(state.list[index]?.productId && state.list[index].productId === action.payload.productId){
                    const prevQnty= state.list[index].quantity;

                    state.list[index].quantity = action.payload.quantity + prevQnty;
                   
                }else{
                    state.list.push(action.payload);
                }
            }
        },
        
    }
});

export const {toggleCart, addCart} = cartSlice.actions;
export default cartSlice.reducer;