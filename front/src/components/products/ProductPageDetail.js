import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductByid } from '../../helpers/getProduct';
import { ProductPageDescription } from './ProductPageDescription';
import CurrencyFormat from 'react-currency-format';

export const ProductPageDetail = () => {
  const [product__detail, setproduct__detail] = useState({})

  let { id } = useParams();

  useEffect(() => {
    getProductByid(id).then((res) => {
      setproduct__detail(res)
    })
  }, [id])

  const { pictures } = product__detail;

  return (
    <>
      {(product__detail && pictures) &&
        <div className='main__main animate__animated animate__fadeIn'>
          <div className="product__main">
            <div className="product__detail">
              <div className='product__detail__img'>
                <img className="product__detail__img" src={pictures[0].url}
                  alt="" />
              </div>
              <div className="product__detail__info">
                <p>{product__detail.sold_quantity} vendidos</p>
                <h4>
                  {product__detail.title}
                </h4>
                <CurrencyFormat className="product__detail__price" value={product__detail.base_price} displayType={'text'} thousandSeparator={true} prefix={'$ '} />
                <div>
                  <button className="btn btn-primary">Comprar</button>
                </div>
              </div>
            </div>
            <ProductPageDescription id={id} />
          </div>
        </div>
      }
    </>
  )
}
