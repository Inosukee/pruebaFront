import React from 'react'
import { shallow } from 'enzyme';
import { ProductsPageItem } from '../../../components/products/ProductsPageItem';


const productTest =
{
  id: '1', thumbnail: 'http://http2.mlstatic.com/D_747115-MLA45255697432_032021-O.jpg', price: 5000, title: 'prueba 1', shipping: { free_shipping: false }, seller: { eshop: 'pruebaEshop' }
}


describe('Pruebas en <HistoryItem />', () => {
  test('debe mostrar el componente correctamente', () => {
    const wrapper = shallow(<ProductsPageItem {...productTest} />)
    expect(wrapper.find('.product__grid').exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})