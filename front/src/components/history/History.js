import React from 'react'
import { HistoryItem } from './HistoryItem'

export const History = () => {

    const historyObject = [
        {
            idHistory: 1,
            nameHistory: 'Categoria'
        },
        {
            idHistory: 2,
            nameHistory: 'Busqueda'
        },
        {
            idHistory: 3,
            nameHistory: 'Producto'
        }
    ]
    return (
        <div className='history__content'>
            <ul className='history__history'>
                {
                    historyObject.map((history) => (
                        <HistoryItem key={history.idHistory} {...history} />
                    ))
                }
            </ul>
        </div>
    )
}
