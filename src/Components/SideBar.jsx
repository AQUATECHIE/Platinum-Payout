import { useState } from "react";
import '../Styles/Sidebar.css'
import Carousel from "./Carousel.jsx";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <div className="container">

                <div className={`sidebar ${isOpen ? 'expanded' : 'collapsed'}`}>
                    <div className="menu-btn" onClick={toggleSidebar}>
                        ☰
                    </div>
                    <ul className="sidebar-links">
                        <li><i className="icon">🏠</i>{isOpen && <span>Home</span>}</li>
                        <li><i className="icon">🔍</i>{isOpen && <span>Search</span>}</li>
                        <li><i className="icon">📄</i>{isOpen && <span>Documents</span>}</li>
                        <li><i className="icon">⚙️</i>{isOpen && <span>Settings</span>}</li>
                    </ul>
                </div>
                <div className="content">
                    <Carousel />
                    <div className="search-bar">
                        
                        <input type="text" placeholder="Search game" />
                        <i className="search-icon">🔍</i>
                    </div>
                </div>
            </div>
        </>
    );


}

export default Sidebar