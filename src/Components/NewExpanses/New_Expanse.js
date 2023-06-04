import React from 'react'
import "./New_Expanse.css";
import ExpanseForm from './ExpanseForm';

const New_Expanse=(props)=> {

  const SaveExpanseDataHandler=(EnterExpanseData)=>{
      const expanseData={
        ...EnterExpanseData,
        id:Math.random().toString()

      }
      // console.log(expanseData)
      props.onAddExpanse(expanseData)

  }

  return (
    <div className='new__expanse'>
    <ExpanseForm onSaveExpanseData={SaveExpanseDataHandler}/>
      
    </div>
  )
}

export default New_Expanse
