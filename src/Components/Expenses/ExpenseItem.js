import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpanseDate from './ExpanseDate';
import Card from "../UI/Card";
import "./ExpenseItem.css"






const ExpenseItem=(props) =>{
   const [title,setTitle]=useState(props.title)
   const [amount,setTitle1]=useState(props.amount)

  
  const clickHandler=()=>{
    setTitle("updated")
    setTitle1(100)
    
  }
 
  
  return (
    <Card className='expense-item'>
      <ExpanseDate date={props.date}/>
      <div className='expense-item__discription'>
      <h2>{title}</h2>
      <div className='expense-item__price'>{amount}</div>
      </div>
      <button  onClick={clickHandler}>Changed Title</button>
      
    </Card>
  )
}

export default ExpenseItem

