import {Link} from 'react-router-dom'
import logo from "../images/hockey.png"
import nhlLogo from "../images/nhl.png"
const Navbar = () => {
    return ( 
        <header>
            <div className="container">
                
                <Link to="/" className="nav">
                    <img src={nhlLogo} alt="nhl-logo"/>
                    <img src={logo} alt="hockey-sticks-money-bag" id="left-logo"/>
                    <h1>Two Minutes for Degeneration </h1>
                    <img src={logo} alt="hockey-sticks-money-bag" id="right-logo"/>
                    <img src={nhlLogo} alt="nhl-logo"/>
                    
                </Link>
            </div>
        </header>
     );
}
 
export default Navbar;