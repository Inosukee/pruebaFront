import React from 'react'
import { HistoryItem } from './HistoryItem'

export const History = ({ categories }) => {
    return (
        <div className='history__content'>
            <ul className='history__history'>
                {
                    categories &&
                    categories.map((history, i, { length }) => {
                        if (i < length - 1) {
                            return (<HistoryItem key={history.id}
                                {...history} />)
                        } else {
                            return (<HistoryItem last={true} key={history.id}
                                {...history} />)
                        }
                    })
                }
            </ul>
        </div>
    )
}
