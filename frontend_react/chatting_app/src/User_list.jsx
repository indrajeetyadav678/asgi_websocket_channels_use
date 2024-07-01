import { useState, useEffect } from 'react';
import axios from 'axios';

const User_list = () => {
  const [val, setVal] = useState([]);


  const load = () => {
    const url = "http://127.0.0.1:8000/login/";
    axios.get(url)
      .then(res => {
        setVal(res.data);
        console.log("33333333333333333333333", res.data)
      })
  };
  console.log("222222222222222222", val)
  useEffect(() => {
    load();
  }, []);

  const ans = val.map((user) => {
    console.log("999999999999999999",user)
    return (
      <>
        <tr>
          <td>{user.name}</td>
          <td>{user.user_id}</td>
          <td>{user.password}</td>
        </tr>
      </>
    )
  });

  return (
    <>
      <table>
        <thead id='user_datahead'>
          <tr>
            <th>Name</th>
            <th>User ID</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody id='user_databody'>
          {ans}
        </tbody>
      </table>
      <h1 style={{color:"black"}}>This is the User list Page</h1>
    </>
  );
};

export default User_list;
