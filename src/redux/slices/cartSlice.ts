// src/redux/slices/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  product: string;
  price: string; // keep as string if you're using $20 format
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeItemCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.product !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItemCart, removeItemCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;








// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// }

// const initialState: CartItem[] = [];

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<CartItem>) => {
//       console.log("in cart slice", state, action.payload)
//       const existing = state.find(item => item.id === action.payload.id);
//       console.log("existing", existing )
//       if (existing) {
//         console.log("allready available ")
//         existing.quantity += 1;
//       } else {
//         console.log("not available ", action.payload);
//         state.push({ ...action.payload, quantity: 1 });
//       }
//       // console.log("state",state )
//     },
//     removeFromCart: (state, action: PayloadAction<number>) => {
//         // console.log("state",state, action )
//       return state.filter(item => item.id !== action.payload);
//     },
//   },
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;
