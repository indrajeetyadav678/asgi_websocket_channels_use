


import { useState, useEffect } from 'react'
import axios from 'axios'

const Chatbox=()=>{
  const [input, setInput] = useState({})
  const [val, setVal] = useState([])
  console.log(input)
  const inputhandle = (e) => {
    let name = e.target.name
    let value = e.target.value
    setInput(item => ({ ...item, [name]: value }))
    console.log(input.user_id)
  }

  const load = () => {
    let url = "http://127.0.0.1:8000/chat/"
    axios.get(url).then(res=>{
      setVal(res.data)
    })
  }

  const submithandle = () => {
    let url = "http://127.0.0.1:8000/chat/"
    axios.get(url, input).then(res=>{
    })
  }

  useEffect(()=>{
     load()
  }, [])

  

  return (
    <>
      <div className='container'>
        <div className='register_wrapper'>
          <h3>Login</h3><br />
          <input type="text" className='input_field' name="user_id" value={input.user_id} placeholder='Enter User_Id'  onChange={inputhandle} hidden /><br /><br />
          <input type="text" className='input_field' name="msg" value={input.msg || ""}  placeholder='set Password' Enter Password In onChange={inputhandle} /><br /><br />
          <button type='submit' className='smsgptbtn' onClick={submithandle}>submit</button>
        </div>
      </div>
    </>
  )
}

export default Chatbox;
