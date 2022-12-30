import {Link} from 'react-router-dom'
import logo from "../images/hockey.png"
import nhlLogo from "../images/nhl.png"
import { useLogout } from '../hooks/useLogout'
const Navbar = () => {
    const {logout} = useLogout()
    const handleClick = () => {
        logout()
    }

    return ( 
        <header>
            <div className="container">
                
                <header className="nav">
                    <img src={nhlLogo} alt="nhl-logo"/>
                    <img src={logo} alt="hockey-sticks-money-bag" id="left-logo"/>
                    <Link to="/">
                        <h1>Two Minutes for Degeneration </h1>
                    </Link>
                    <img src={logo} alt="hockey-sticks-money-bag" id="right-logo"/>
                    <img src={nhlLogo} alt="nhl-logo"/>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                    <div className="logout">
                        <button className="logout-btn" onClick={handleClick}>Logout</button>
                    </div>
                </header>
                <nav></nav>
            </div>
        </header>
     );
}
 
export default Navbar;