import "../Styles/NavBar.css"


function NavBar() {
    return (

        <>
            <nav className="navbar">
                <div className="div">
                    <a href="">PL <span>A</span> TINUM PAYOUT</a>

                    <div className="auth">
                        <a href="" className="login">Login</a>
                        <a href="" className="signup">Sign up</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar