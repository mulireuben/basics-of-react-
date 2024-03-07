import "./style.css";
function Header(){
    return(
        <header>
            <nav className="nav">
            <img src="/assets/react-logo.png" className="nav-logo" alt=""/>
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </nav>
        </header>
        )   
    }

export default Header