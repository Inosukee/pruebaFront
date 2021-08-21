import React from 'react'
import { shallow } from 'enzyme';
import { HistoryItem } from '../../../components/history/HistoryItem';


const nameHistory = 'Test'

describe('Pruebas en <HistoryItem />', () => {
  test('debe mostrar el componente correctamente', () => {
    const wrapper = shallow(<HistoryItem name={nameHistory} />)
    expect(wrapper.find('.history__svg').exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})