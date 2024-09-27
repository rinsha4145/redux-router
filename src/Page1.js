import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setnumber1 } from './CreateSlice';
import { useDispatch } from 'react-redux';

function Page1() {
    const [inputValue,setInputValue]=useState();
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleSubmit=()=>{
        dispatch(setnumber1(Number(inputValue)));
        navigate('/page2')
    }
  return (
    <div>
       <input type='number' name="num1" value={inputValue} placeholder="first number"  onChange={(e) => setInputValue(e.target.value)}></input>
       <button onClick={handleSubmit}>click</button>
    </div>
  )
}

export default Page1