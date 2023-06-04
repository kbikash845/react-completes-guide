import logo from './logo.svg';
import './App.css';
// import ExpenseItem from './Components/Expanses/ExpenseItem';
import NewExpanses from './Components/NewExpanses/New_Expanse';
import Expanse from './Components/Expenses/Expanse';







const App=() =>{
  const expanses=[
    {
      id:"e1",
      title:"Toilet Paper",
      amount:"94.12",
      date:new Date(2020,7,14),
      location:"Store"
    },
    {
      id: "e2", 
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
        location: "Shooping Mall",
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
        location: "Office",
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
        location: "Carpenter",
    }]

    const AddExpanseDatahandler=expanse=>{
      console.log("App js");
      console.log(expanse)
    }

  
  
  return (
  <div>
  <NewExpanses onAddExpanse={AddExpanseDatahandler}/>
  <Expanse items={expanses}/>
  
  </div>
  )
}

export default App;
