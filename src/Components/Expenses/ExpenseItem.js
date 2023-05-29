import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpanseDate from './ExpanseDate';
import Card from "../UI/Card";
import "./ExpenseItem.css"






const ExpenseItem=(props) =>{
   const [title,setTitle]=useState(props.title)
   const [amount,setAmount]=useState(props.amount)

  
  const clickTitleHandler=()=>{
    setTitle("updated")
    
    
  }
  const clickAmountHandler=()=>{
    setAmount(100);
  }
 
  
  return (
    <Card className='expense-item'>
      <ExpanseDate date={props.date}/>
      <div className='expense-item__discription'>
      <h2>{title}</h2>
      <div className='expense-item__price'>{amount}</div>
      </div>
      <button  onClick={clickTitleHandler}>Changed Title</button>
      <button  onClick={clickAmountHandler}>Changed Amount</button>

      
    </Card>
  )
}

export default ExpenseItem

