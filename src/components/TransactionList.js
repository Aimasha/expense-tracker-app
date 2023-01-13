

import { useState } from 'react'
import React, { useContext} from 'react'
import ExpenseTracker from '../contexts/ExpenseTracker'

 function TransactionList() {

    const {history,setHistory} = useContext(ExpenseTracker)
    
    const handleDelete = (id) => {
      const filtered = history.filter((item) => item.id !== id)
      setHistory(filtered)
    }

  return (
    <div className='trans-container'>
        <h2>History</h2> 
         <hr />
        {
          history.map((item,id)=>{
            const minusPlusSign = item.total < 0 ? "-" : "+" 
            return(
              < div key={item.id}>
              <ul className='transaction'>  

                <li  >
                 <div className='main-trans'>
                <button onClick={() => handleDelete(item.id)} className='delete-btn'>x</button>
                 <div className='names'>{item.title}</div> 
                  <span className='span'>{minusPlusSign}${Math.abs(item.total)}</span>
                  </div>
                  </li>
                
                  <div className={item.total < 0  ? "minusLine" : "plucLine"}></div>
              </ul>
              
              </div>
            )
          })
        }
             
           
        
        
    </div>
  )
}
export default TransactionList
