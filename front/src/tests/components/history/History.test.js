import React from 'react'
import { shallow } from 'enzyme';
import { History } from '../../../components/history/History';


const categoriesTest = [
  { id: 1, name: 'prueba 1' },
  { id: 2, name: 'prueba 2' },
  { id: 3, name: 'prueba 3' }
]

describe('Pruebas en <History />', () => {
  test('debe mostrar el componente correctamente', () => {
    const wrapper = shallow(<History categories={categoriesTest} />)
    expect(wrapper.find('.history__history').exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})