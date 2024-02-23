import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice(
    {
        name: "cart",
        initialState: [],
        reducers : {
            add: (state,action) => {
                //action.payload : we can access argument sent from the Product i.e post
                state.push(action.payload)
            },
            remove: (state,action) => {
                //It will put only items which their id does not match action.payload (passed in Product.js)
                return state.filter((item) => item.id !== action.payload)
            }
        }
    }
)

export const {add, remove} = CartSlice.actions
export default CartSlice.reducer;
