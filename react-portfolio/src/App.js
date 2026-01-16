
import './App.css';
import Homefile from './Homefile';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';




export default function App() {
  return (
    <div className="App">             
      <Routes>
        <Route path="/" element={<Homefile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  
     
    </div>
  );
}


