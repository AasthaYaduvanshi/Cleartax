import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Glossary from './Pages/Glossary';
import Products from './Pages/Products';
import TrustandSafety from './Pages/TrustandSafety';
import Webinars from './Pages/Webinars';
import Dashboard from './Pages/Dashboard';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
    <Router>
      <Sidebar>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Glossary' element={<Glossary />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/TrustandSafety' element={<TrustandSafety />} />
        <Route path='/Webinars' element={<Webinars />} />
      </Routes>
      </Sidebar>
    </Router>
    </>
  );
}

export default App;
