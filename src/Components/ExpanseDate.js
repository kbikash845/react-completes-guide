import "./ExpenseItem.css"
import "./ExpenseDate.css"




function ExpanseDate(props) {
    const Month=props.date.toLocaleString("en-Us",{month:"long"});
    const day=props.date.toLocaleString("en-Us",{day:"2-digit"});
    const year=props.date.getFullYear();

  return (
    <div className='expense-date'>
    <div className='expense-date__month'>{Month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  )
}

export default ExpanseDate
