import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpanseDate from './ExpanseDate';
import Card from "../UI/Card";
import "./ExpenseItem.css"






const ExpenseItem=(props) =>{
  //  const [title,setTitle]=useState(props.title)
  //  const [amount,setAmount]=useState(props.amount)

   
    return (
    <Card className='expense-item'>
      <ExpanseDate date={props.date}/>
      <div className='expense-item__discription'>
      <h2>{props.title}</h2>
      <div className='expense-item__price'>{props.amount}</div>
      </div>
               
    </Card>
  )
}

export default ExpenseItem

