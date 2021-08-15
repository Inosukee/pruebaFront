import React from 'react'

export const HistoryItem = ({ nameHistory, last = false }) => {
  return (

    !last ?
      (
        <li>
          <a href="!#">{nameHistory}</a>
          <div className='history__svg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path></svg>
          </div>
        </li>

      )
      :
      (
        <li>
          <a href="!#">{nameHistory}</a>
        </li>
      )
  )
}
