import {Link} from 'react-router-dom'
import logo from "../images/hockey.png"
import nhlLogo from "../images/nhl.png"
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()
    const handleClick = () => {
        logout()
    }

    return ( 
        
                
                <header className="nav">
                    <img src={nhlLogo} alt="nhl-logo"/>
                    <img src={logo} alt="hockey-sticks-money-bag" id="left-logo"/>
                    <Link to="/">
                        <h1>Two Minutes for Degeneration </h1>
                    </Link>
                    
                    {user && (
                        <div className="logout">
                        <span>{user.email}</span>
                        {console.log(user.email)}
                        <button className="logout-btn" onClick={handleClick}>Logout</button>
                    </div>
                    )}
                    {!user && (
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    )}
                    
                    <img src={logo} alt="hockey-sticks-money-bag" id="right-logo"/>
                    <img src={nhlLogo} alt="nhl-logo"/>
                    
                </header>
                
            
     );
}
 
export default Navbar;