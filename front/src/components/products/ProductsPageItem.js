import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import shippingImg from '../../assets/img/ic_shipping.png';

export const ProductsPageItem = ({ id, thumbnail, price, title, shipping, seller, last = false }) => {
  const { eshop } = seller;
  console.log(eshop);
  return (
    <>
      <Link to={`./items/${id}`} className='product__grid' >
        <div className='product__container__img'>
          <img className='product__img' src={thumbnail} alt="foto" />
        </div>
        <div className='product__container__info'>
          <div className='product__container__price'>
            <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$ '} />
            {
              shipping.free_shipping &&
              <img className='product__image__shipping' src={shippingImg} alt="shippingImg" />
            }
          </div>
          <div className='product__container__title'>
            {title}
          </div>
        </div>
        <div className='product__container__author'>
          {
            eshop &&
            eshop.nick_name
          }
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
