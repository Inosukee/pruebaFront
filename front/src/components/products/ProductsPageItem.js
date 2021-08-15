import React from 'react'

export const ProductsPageItem = ({ img, price, productName }) => {
  return (
    <>
      <div className='product__grid'>
        <div className='product__container__img'>
          <img className='product__img' src={img} alt="foto" />
        </div>
        <div className='product__container__info'>
          <div className='product__container__price'>
            {price}
          </div>
          <div className='product__container__title'>
            {productName}
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}
