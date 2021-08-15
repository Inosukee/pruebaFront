import React from 'react'
import logo from '../../assets/img/Logo_ML.png'
import search from '../../assets/img/ic_Search.png'

export const Header = () => {
    return (
        <header role='banner' className='header__header'>
            <div className='pointer'>
                <img src={logo} alt="logo" />
            </div>
            <div className="input-group header__input">
                <input type="text" className="form-control" placeholder="Nunca dejes de buscar" />
                <button className="btn btn-outline-secondary header__button" type="button"><img src={search} alt="search" /></button>
            </div>
        </header>
    )
}
