import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpanseList.css'

const ExpanseList=(props)=> {
  
    
    if(props.items.length=== 0) {
        
      return <h2 className='expenses-list__fallback'>found no expenses.</h2>
    }
    return (
        
        <ul className='expenses-list'>
        {props.items.map((expense)=>(
        <ExpenseItem 
        key={expense.id}
        id={expense.id}
        title={expense.title}
        amount={expense.amount} 
        date={expense.date} 
        location={expense.location}
        
    />
    ))}
        </ul>
    )}
    


export default ExpanseList
