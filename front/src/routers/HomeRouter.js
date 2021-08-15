import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainPage } from '../components/main-page/MainPage'
import { ProductPageDetail } from '../components/products/ProductPageDetail'
import { Header } from '../components/shared/Header'

export const HomeRouter = ({ history }) => {
  const [filter, setFilter] = useState([])

  return (
    <>
      <Header setFilter={setFilter} history={history} />
      <Switch>
        <Route exact path="/items">
          <MainPage filter={filter} />
        </Route>
        <Route exact path="/items/:id" component={ProductPageDetail} />
      </Switch>
    </>
  )
}
