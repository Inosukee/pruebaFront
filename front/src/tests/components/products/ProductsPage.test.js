import React from 'react'
import { shallow } from 'enzyme';
import { ProductsPage } from '../../../components/products/ProductsPage';


const productTest = [
  { id: '1', thumbnail: 'http://http2.mlstatic.com/D_747115-MLA45255697432_032021-O.jpg', price: 5000, title: 'prueba 1', shipping: { free_shipping: false } },
  { id: '2', thumbnail: 'http://http2.mlstatic.com/D_747115-MLA45255697432_032021-O.jpg', price: 8000, title: 'prueba 2', shipping: { free_shipping: true } },
  { id: '3', thumbnail: 'http://http2.mlstatic.com/D_747115-MLA45255697432_032021-O.jpg', price: 3000, title: 'prueba 3', shipping: { free_shipping: false } }
]


describe('Pruebas en <HistoryItem />', () => {
  test('debe mostrar el componente correctamente', () => {
    const wrapper = shallow(<ProductsPage productos={productTest} />)
    expect(wrapper.find('.product__wrapper').exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})