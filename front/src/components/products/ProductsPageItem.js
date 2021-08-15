import React from 'react'
import CurrencyFormat from 'react-currency-format';

export const ProductsPageItem = ({ img, price, title, last = false }) => {
  return (
    <>
      <div className='product__grid'>
        <div className='product__container__img'>
          <img className='product__img' src={img} alt="foto" />
        </div>
        <div className='product__container__info'>
          <div className='product__container__price'>
            <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$ '} />
          </div>
          <div className='product__container__title'>
            {title}
          </div>
        </div>
      </div>
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
