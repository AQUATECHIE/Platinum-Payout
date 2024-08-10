import { useState } from "react";
import '../Styles/NavHead.css'




function Nav() {

    const [isOpen, setIsopen] = useState(false)
    const toggleNavbar = () => {
        setIsopen(!isOpen)
    }

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="/home">Platinum <span>Payout</span></a>
                <button className="navbar-toggler" type="button"
                 onClick={toggleNavbar} aria-controls="navbarNav" 
                 aria-expanded={isOpen ? "true" : "false"} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/review">Online Casino reviews <span>|</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/games">Platinum casino <span>|</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/spot">Platinum bets <span>|</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/vip">Platinum funding <span>|</span></a>
                        </li>
                    </ul>
                </div>
                <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="nav-sign">
                    <a href="/login"> Sign in</a>
                    <a href="/signup">Create Account</a>

                </div>
            </nav>
        </>

    );

}

export default Nav