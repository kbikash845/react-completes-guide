import React ,{useState}from 'react';
import "./ExpanseForm.css"

const ExpanseForm=() =>{
   const[EnterTitle,setenterTitle]= useState()
   const[Enteramount,setenteramount]= useState()
   const[Enterdate,setenterdate]= useState()

//    const [userInput,SetuserInput]=useState({
//     EnterTitle:"",
//     Enteramount:"",
//     Enterdate:""
//    })


    const titleHandler=(event)=>{
        setenterTitle(event.target.value)
        // SetuserInput({
        //     ...userInput,
        //     EnterTitle:event.target.value,
        // });

    //    SetuserInput((prevState)=>{
    //         return{...prevState,EnterTitle:event.target.value

    //         }
    //    })
        
    }
    const amountHandler=(event)=>{
        setenteramount(event.target.value)
        // SetuserInput({
        //     ...userInput,
        //     Enteramount:event.target.value
        // });
    }
    const dateHandler=(event)=>{
        setenterdate(event.target.value)
        // SetuserInput({
        //     ...userInput,
        //     Enterdate:event.target.value,
        // });
      }

        const submitHandler=(e)=>{
             e.preventDefault();
             const expansedate={
                title:EnterTitle,
                amount:Enteramount,
                date:new Date(Enterdate)
             }
             console.log(expansedate)
             setenterTitle("")
             setenteramount("")
             setenterdate("")
        }
    
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
         <div className='new-expense__controls'>
             <label>Title</label>
              <input type='text' value={EnterTitle} onChange={titleHandler}/>
            </div>
            <div className='new-expense__controls'>
             <label>Amount</label>
              <input type='number' min="0.01" step="0.01" value={Enteramount} onChange={amountHandler}/>
            </div>
            <div className='new-expense__controls'>
             <label>Date</label>
              <input type='Date' min="2019-01-01" max="2024-01-01" value={Enterdate} onChange={dateHandler}/>
            </div>
      </div>
      <div className='new-expanse__action'>
      <button className='btn1'>Add Expanse</button>
      </div>
    </form>
  )
}

export default ExpanseForm
