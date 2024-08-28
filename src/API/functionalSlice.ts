import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from './../interfaces/Interfaces';


interface ILikes {
    likes: IProduct[],
}

const initialState: ILikes = {
    likes: [],
}

export const functionalSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        toggleLike: (state, action: PayloadAction<IProduct>) => {
            let newArray = [...state.likes];
            const isExist = state.likes.some(r => r.id === action.payload.id)
            if (isExist) {
                const index = state.likes.findIndex(item => item.id === action.payload.id)
                if (index !== -1) {
                    newArray.splice(index, 1)
                }
            } else {
                newArray.push(action.payload)
            }
            state.likes = newArray

        },
        removeProduct: (state, action: PayloadAction<IProduct>) => {
            state.likes = state.likes.filter(elem => elem.id !== action.payload.id)
        },
    }
})

export const { actions, reducer } = functionalSlice;