import React, { useState } from 'react'
import logo from '../../assets/img/Logo_ML.png'
import search from '../../assets/img/ic_Search.png'

export const Header = ({ setFilter }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 0) {
            setFilter(() => [inputValue]);
        }

    }
    return (
        <header role='banner' className='header__header'>
            <div className='pointer'>
                <img src={logo} alt="logo" />
            </div>
            <div className="input-group header__input">
                <input type="text" className="form-control" placeholder="Nunca dejes de buscar" value={inputValue}
                    onChange={handleInputChange} />
                <button className="btn btn-outline-secondary header__button" type="button" onClick={handleSubmit}><img src={search} alt="search" /></button>
            </div>
        </header>
    )
}
