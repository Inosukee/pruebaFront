import React from 'react'

export const HistoryItem = (history) => {
  console.log(history);
  const { nameHistory } = history;
  return (
    <li>
      <a href="!#">{nameHistory}</a>
      <div className='history__svg'>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path></svg>
      </div>
    </li>
  )
}
