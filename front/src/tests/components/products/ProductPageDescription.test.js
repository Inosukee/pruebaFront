import React from 'react'
import { shallow } from 'enzyme';
import { ProductPageDescription } from '../../../components/products/ProductPageDescription';

const idTest = 'MLA912447790'
describe('Pruebas en <ProductPageDescription />', () => {
  test('debe mostrar el componente correctamente', () => {
    const wrapper = shallow(<ProductPageDescription id={idTest} />)
    expect(wrapper.find('.product__desc').exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})