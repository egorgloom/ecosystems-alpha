import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../common/common';

import { IProduct } from './../interfaces/Interfaces';



export const productsSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], string>({
            query: () => 'products',
            providesTags: ['Products']
        }),
        getProduct: builder.query<IProduct, any>({
            query: ( {id} ) => `products/${id}`,
            providesTags: ['Products']
        }),
    }),

})

export const {useGetProductsQuery, useGetProductQuery} = productsSlice

