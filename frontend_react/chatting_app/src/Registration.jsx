import { useState } from 'react'
import axios from 'axios'

const Registration=()=>{
  const [input, setInput] = useState({})
  console.log(input)
  const inputhandle = (e) => {
    let name = e.target.name
    let value = e.target.value
    setInput(item => ({ ...item, [name]: value }))
  }

  const submithandle = () => {
    let url = "http://127.0.0.1:8000/login/"
    axios.post(url, input).then(res => {
      alert("Login successfull")
    })
  }

  return (
    <>
      <div className='container'>
        <div className='register_wrapper'>
          <h3>Registration</h3><br />
          <input type="text" className='input_field' name="name" value={input.name || ""}  placeholder='Enter Name' onChange={inputhandle} /><br /><br />
          <input type="text" className='input_field' name="user_id" value={input.user_id || ""} placeholder='Enter User_name'  onChange={inputhandle} /><br /><br />
          <input type="text" className='input_field' name="password" value={input.password || ""}  placeholder='set Password' Enter Password In onChange={inputhandle} /><br /><br />
          <button type='submit' className='signuptbtn' onClick={submithandle}>submit</button>
        </div>
      </div>
    </>
  )
}

export default Registration
