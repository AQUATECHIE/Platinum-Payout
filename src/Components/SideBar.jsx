import { useState } from "react";
import '../Styles/Sidebar.css'

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSidebar = () =>{
        setIsOpen(!isOpen)
    }


    return (
        <>
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
        </>
    );


}

export default Sidebar