import React from 'react'
import { History } from './History'
import { ProductsPage } from './ProductsPage'


export const MainPage = () => {
    return (
        <div className='Main__Main'>
            <History />
            <ProductsPage />
        </div>
    )
}
