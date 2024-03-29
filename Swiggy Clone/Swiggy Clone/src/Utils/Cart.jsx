import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:'Cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
})
export const {addItem,removeItem,clearCart}=CartSlice.action;
export default CartSlice.reducer;