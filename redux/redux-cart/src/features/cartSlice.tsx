import {createSlice} from "@reduxjs/toolkit";
const intialState ={
    products:[],
    cart: []
};

const  cartSlice = createSlice({
    "name" : "cart",
    intialState,
    reducers:{
        //actions
            initProducts:(state, action) =>{},
            addToCart:(state, action) =>{},
            removeFromCart:(state, action) =>{}
    }
})

export const{initProducts, addToCart, removeFromCart} = cartSlice.actions; 
export default cartSlice.reducer