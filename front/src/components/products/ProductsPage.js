import React from 'react'
import { ProductsPageItem } from './ProductsPageItem'

export const ProductsPage = () => {

    const objectosEncontrados = [
        {
            idProduct: '1',
            productName: 'Mesa De Estudio Roble Natural Y Caño Blanco Begônia',
            price: '$ 4.499',
            img: 'https://http2.mlstatic.com/D_639578-MLA43927778039_102020-O.jpg'
        },
        {
            idProduct: '2',
            productName: 'Mesa Nordica Escandinava 60x100 Comedor Cocina Maciza',
            price: '$ 6.599',
            img: 'https://http2.mlstatic.com/D_605204-MLA31040454909_062019-O.jpg'
        },
        {
            idProduct: '3',
            productName: 'Mesa Industrial Comedor Madera Y Hierro (140x80x75)',
            price: '$ 17.600',
            img: 'https://http2.mlstatic.com/D_977778-MLA31000872113_062019-O.jpg'
        },
        {
            idProduct: '4',
            productName: 'Mesa De Cocina Grande Sin Tornillos, Fácil Armado | Mite',
            price: '$ 7.137.17',
            img: 'https://http2.mlstatic.com/D_823430-MLA42293521905_062020-O.jpg'
        }
    ]

    return (
        <div className='product__main'>
            <div className='product__wrapper'>
                {
                    objectosEncontrados.map((products) => (
                        <ProductsPageItem key={products.idProduct}
                            {...products}
                        />
                    ))
                }
            </div>
        </div>
    )
}
