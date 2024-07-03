import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'


const Layout = () => {
    const data = useSelector(state => state.mylogdata?.user_data)
    console.log("&&&&&&&&&&&&&&&&&&&&&", data)
    let username = "Guest"
    if(data!=="null"){    
        username =data.length>0? (data[0]["name"]):"Guest"
        console.log("&&&&&&&&&&&============>", username)
    }
    const dispatch = useDispatch()
    return (
        <>
            <ul id="Navbar">
                <li>
                    <Link to="/home" style={{color:"white", fontSize:"20px", fontWeight:"700"}}>Home</Link>
                </li>
                <li>
                    <Link to="/login" style={{color:"white", fontSize:"20px", fontWeight:"700"}}>Login</Link>
                </li>
                <li>
                    <Link to="/register" style={{color:"white",fontSize:"20px", fontWeight:"700"}}>Registration</Link>
                </li>
                <li>
                    <Link to="/listd" style={{color:"white", fontSize:"20px", fontWeight:"700"}}>User List</Link>
                </li>
                <li>
                    <Link to="/chat" style={{color:"white", fontSize:"20px", fontWeight:"700"}}>chat</Link>
                </li>
               
                <li>
                    <Link to="/">
                        <label style={{ color: "white",fontSize:"20px", fontWeight:"700" }}>{username}</label>
                    </Link>
                </li>
            </ul>
            <Outlet>

            </Outlet>
            <hr border="1" size="2" color="black" />
            <footer>
                <h1 style={{ textAlign: "center" }}>This is Footer</h1>
            </footer>
        </>
    );
}
export default Layout;