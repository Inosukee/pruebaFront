import React from 'react'
import { Route } from 'react-router'
import PropTypes from 'prop-types';



// creado para el tema de posible logeo en la app

export const PublicRoute = ({
  component: Component,
  ...rest

}) => {
  return (
    <Route {...rest}
      component={(props) => (
        (<Component {...props} />)
      )}
    />
  )
}


PublicRoute.propTypes = {
  component: PropTypes.func.isRequired
}
