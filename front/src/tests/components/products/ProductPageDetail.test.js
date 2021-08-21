import React from 'react'
import { mount } from 'enzyme';
import { ProductPageDetail } from '../../../components/products/ProductPageDetail';
import { MemoryRouter, Route } from 'react-router-dom';



describe('Pruebas en <ProductPageDetail />', () => {
  test('debe mostrar el componente correctamente', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/items/MLA912447790']}>
        <Route path='items/:id' component={ProductPageDetail} />
      </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
  })
})