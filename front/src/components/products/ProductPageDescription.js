import React, { useEffect, useState } from 'react'
import { getProductDesc } from '../../helpers/getProduct'

export const ProductPageDescription = ({ id }) => {

  const [productDesc, setProductDesc] = useState({})


  useEffect(() => {
    getProductDesc(id).then((res) => {
      setProductDesc(res)
    })
  }, [id])

  return (
    <>
      <div className="product__desc">
        <h2>
          Descripción del producto
        </h2>
        <p>{productDesc.plain_text}</p>
      </div>
    </>
  )
}
