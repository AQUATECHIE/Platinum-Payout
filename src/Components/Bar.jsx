import "../Styles/Bar.css"

function Bar (){
    return(
        <>
            <div className="navbar">

                <div className="contents">
                    <a href=""> <span className="navbar-logo">PL<span className="ace-symbol">♠</span>TINUM PAYOUT</span> </a>

                    <div className="auth">
                        <a href=""><button className="log">Login</button></a>
                        <a href=""><button className="sig">Sign up</button></a>
                    </div>
                </div>
            </div>
        
        </>
    );
}

export default Bar