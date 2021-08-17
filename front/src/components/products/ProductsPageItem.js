import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';

export const ProductsPageItem = ({ id, thumbnail, price, title, last = false }) => {
  return (
    <>
      <Link to={`./items/${id}`} className='product__grid' >
        <div className='product__container__img'>
          <img className='product__img' src={thumbnail} alt="foto" />
        </div>
        <div className='product__container__info'>
          <div className='product__container__price'>
            <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$ '} />
          </div>
          <div className='product__container__title'>
            {title}
          </div>
        </div>
      </Link>
      {
        !last ?
          (
            <hr />
          )
          :
          (
            <br />
          )
      }

    </>
  )
}
