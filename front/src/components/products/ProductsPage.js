import React from 'react'
import { ProductsPageItem } from './ProductsPageItem'
import PropTypes from 'prop-types'

export const ProductsPage = ({ productos }) => {
    return (
        <div className='product__main'>
            <div className='product__wrapper'>
                {
                    productos &&
                    productos.map((products, i, { length }) => {
                        if (i < length - 1) {
                            return (<ProductsPageItem
                                key={products.id}
                                {...products}
                            />)
                        }
                        else {
                            return (<ProductsPageItem last={true}
                                key={products.id}
                                {...products}
                            />)
                        }
                    })
                }
            </div>
        </div>
    )
}

ProductsPage.propTypes = {
    productos: PropTypes.array
}