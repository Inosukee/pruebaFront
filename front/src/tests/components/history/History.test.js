import React from 'react'
import { shallow } from 'enzyme';
import { History } from '../../../components/history/History'

describe('Pruebas en <History/>', () => {
  test('debe mostrar el componente correctamente', () => {
    const wrapper = shallow(<History />)
    expect(wrapper).toMatchSnapshot()
  })

})
