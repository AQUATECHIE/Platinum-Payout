import {BrowserRouter as  Router, Routes,Route }from 'react-router-dom'
import LandingPage from './Pages/LandingPage.jsx'
import SignUp from './Pages/Signup.jsx'
import Login from './Pages/LoginPage.jsx';






function App() {
    return(
      <>
        <Router>
            <Routes>
            <Route path='/' element={ <LandingPage/> }/> 
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
            
            </Routes>
        </Router>

        
        
        
      </>
    );
}

export default App
