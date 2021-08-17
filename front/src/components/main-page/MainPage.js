import React from 'react'
import { useFetchProduct } from '../../hooks/useFetch';
import { History } from '../history/History'
import { ProductsPage } from '../products/ProductsPage'


export const MainPage = ({ filter }) => {

    const { data: products, loading } = useFetchProduct(filter);
    return (
        <>
            {loading && <p>Cargando...</p>}
            {
                products &&
                <div className='main__main animate__animated animate__fadeIn'>
                    <History categories={products.categories} />
                    <ProductsPage productos={products.items} />
                </div>
            }
        </>
    )
}
