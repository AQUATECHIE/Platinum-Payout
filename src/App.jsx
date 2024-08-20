import {BrowserRouter as  Router, Routes,Route }from 'react-router-dom'
// import Sidebar from './Components/SideBar.jsx';
import Landing from './Pages/Landing.jsx';






function App() {
    return(
      <>
        <Router>
            <Routes>
            <Route path='/' element={ <Landing/> }/> 
            
            
            </Routes>
        </Router>

        
        
        
      </>
    );
}

export default App
