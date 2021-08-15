import React from 'react'
import { History } from '../history/History'
import { ProductsPage } from '../products/ProductsPage'


export const MainPage = () => {
    return (
        <div className='main__main'>
            <History />
            <ProductsPage />
        </div>
    )
}
