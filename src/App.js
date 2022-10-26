import { Routes, Route, Link } from 'react-router-dom';
import { AboutPage } from './views/AboutPage/AboutPage';
import { HomePage } from './views/HomePage/HomePage';
import { ContactsPage } from './views/ContactsPage/ContactsPage';
import './App.css';



function App() {
   return (
    <div className="App">
        <Link className='link' to="/" >Home</Link>
        <Link className='link' to="/about" >About</Link>
        <Link to="/contacts" >contacts</Link>
        <Routes>
          <Route path="/"  element={<HomePage />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contacts" element={<ContactsPage/>} />
        </Routes> 
    </div>
  );
}

export default App;
