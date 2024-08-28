import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./API/functionalSlice";

import { productsSlice } from './API/productsSlice';


export const store = configureStore({
    reducer: {
        [productsSlice.reducerPath]: productsSlice.reducer,
        likes: reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsSlice.middleware)
})


export type TypeRootState = ReturnType<typeof store.getState>