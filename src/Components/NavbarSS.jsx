import "../Styles/Nav.css";

function NavBar(){
    return (
        <>
            <nav className="navbar1">
                <a href="/"> 
                    Platinum <span>Payout</span>
                </a>

            </nav>
            <div className="navbar2">
                <ul>
                    <li><a href="" className="AA">Home</a></li>
                    <li><a href="" className="AA">About</a></li>
                    <li><a href="" className="AA">FAQS</a></li>
                    
                </ul>
            </div>
        </>
    );
}

export default NavBar