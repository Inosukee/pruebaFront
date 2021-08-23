import PropTypes from 'prop-types'
import { useFetchProductDesc } from '../../hooks/useFetch'

export const ProductPageDescription = ({ id }) => {



  const { data: productDesc, loading } = useFetchProductDesc(id);

  return (
    <>
      {loading && <p>Cargando...</p>}
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