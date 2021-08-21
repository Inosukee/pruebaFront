import React from 'react'
import { shallow } from 'enzyme';
import { Header } from '../../components/shared/Header';



jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000"
  })
}));


describe('Pruebas en <Header/>', () => {
  const wrapper = shallow(<Header />)

  test('debe mostrar el componente correctamente', () => {
    expect(wrapper.find('.header__input').exists()).toBe(true)
    expect(wrapper.find('.header__img').exists()).toBe(true)  
    expect(wrapper).toMatchSnapshot()
  })

  test('debe de cambiar el texto', () => {
    const input = wrapper.find('input')
    const value = 'testInput';
    const name = 'searchText';
    input.simulate('change', { target: { name:name, value:value } })

  })

})


