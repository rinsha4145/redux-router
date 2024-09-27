import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setnumber2,sum } from './CreateSlice';
import { useDispatch } from 'react-redux';

function Page2() {
    const [inputValue,setInputValue]=useState();
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleSubmit=()=>{
        dispatch(setnumber2(Number(inputValue)));
        dispatch(sum());
        navigate('/page3')
    }
  return (
    <div>
       <input type='number' name="num1" value={inputValue} placeholder="second number"  onChange={(e) => setInputValue(e.target.value)}></input>
       <button onClick={handleSubmit}>click</button>
    </div>
  )
}

export default Page2