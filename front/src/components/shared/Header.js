import React, { useEffect } from 'react'
import queryString from 'query-string';
import logo from '../../assets/img/Logo_ML.png'
import searchIco from '../../assets/img/ic_Search.png'
import { useForm } from '../../hooks/useForm';
import { Link, useLocation } from 'react-router-dom';

export const Header = ({ setFilter, history }) => {
    const location = useLocation();
    const { search = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: search
    });

    const { searchText } = formValues;

    useEffect(() => setFilter(search), [setFilter, search])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchText.trim().length > 0) {
            if (location.pathname.includes('/items/')) {
                history.push(`/items?search=${searchText}`);
            } else {
                history.push(`items?search=${searchText}`);
            }
        }

    }
    return (
        <header role='banner' className='header__header'>
            <Link to={'/'} className='pointer'>
                <img className='header__img' src={logo} alt="logo" />
            </Link>
            <form onSubmit={handleSubmit} className="header__group">
                <input type="text" className="header__input" placeholder="Nunca dejes de buscar" value={searchText}
                    onChange={handleInputChange} name="searchText" />
                <button className="btn btn-outline-secondary header__button" type="submit"><img src={searchIco} alt="search" /></button>
            </form>
        </header>
    )
}
