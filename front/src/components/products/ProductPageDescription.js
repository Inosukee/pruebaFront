import React, { useEffect, useState } from 'react'
import { getProductDesc } from '../../helpers/getProduct'

import PropTypes from 'prop-types'

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
        <p className="product__desc__text">{productDesc.plain_text}</p>
      </div>
    </>
  )
}


ProductPageDescription.propTypes = {
  id: PropTypes.string.isRequired
}