import React from 'react';
import "./ExpanseForm.css"

const ExpanseForm=() =>{
  return (
    <form>
      <div className='new-expense__controls'>
         <div className='new-expense__controls'>
             <label>Ttitle</label>
              <input type='text'/>
            </div>
            <div className='new-expense__controls'>
             <label>Amount</label>
              <input type='number' min="0.01" step="0.01"/>
            </div>
            <div className='new-expense__controls'>
             <label>Date</label>
              <input type='Date' min="2019-01-01" max="2024-01-01"/>
            </div>
      </div>
      <div className='new-expanse__action'>
      <button className='btn1'>Add Expanse</button>
      </div>
    </form>
  )
}

export default ExpanseForm
