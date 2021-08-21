import React from 'react'
import { shallow } from 'enzyme';
import { MainPage } from '../../../components/main-page/MainPage';


describe('Pruebas en <MainPage />', () => {
  test('debe mostrar el componente correctamente', () => {
    const wrapper = shallow(<MainPage filter={'Comida'} />)
    expect(wrapper.find('.main__main').exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})