import { Link, Outlet } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'


const Layout=()=>{
    const data = useSelector(state=>{state.mylogdata.user_data})
    console.log("&&&&&&&&&&&&&&&&&&&&&",data)

    const dispatch = useDispatch()
    return(
        <>
        <ul id="Navbar">
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Registration</Link>
            </li>
            <li>
                <Link to="/listd">user_list</Link>
            </li>
            <li>
                <Link to="/chat">chat</Link>
            </li>
        </ul>
        <Outlet>

        </Outlet>
        <footer>
            <h1>This is Footer</h1>
        </footer>
        </>
    );
}
export default Layout;