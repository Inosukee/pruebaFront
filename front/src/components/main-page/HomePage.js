import React, { useState } from 'react'
import { MainPage } from '../main-page/MainPage'
import { Header } from '../shared/Header'


export const HomePage = () => {

    const [filter, setFilter] = useState([])

    return (
        <>
            <Header setFilter={setFilter} />
            <MainPage filter={filter} />
        </>
    )
}
