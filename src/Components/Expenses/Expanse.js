import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem'
import ExpanseFilter from './ExpanseFilter';
import "./Expanse.css";
import ExpanseList from './ExpanseList';
import ExpanseChart from './ExpanseChart';


export default function Expanse(props) {

  const [filteredYear,setFilteredYear]=useState("2020");

  const filteresChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear)
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  
  return (
    <Card className='expenses'>
    <ExpanseFilter selected={filteredYear} onChangeFilter={filteresChangeHandler}/>
    <ExpanseChart expenses={filteredExpenses}/>

   <ExpanseList items={filteredExpenses}/>
   
    </Card>
  )
}
