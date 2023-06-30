import './App.css'

import About from './sites/About'
import Landingpage from './sites/Landingpage'
import Sales from './sites/Sales'
import Imprint from './sites/Imprint';
import Contact from './sites/Contact'
import { Route, Routes } from "react-router-dom"
import Galery from './sites/Galery';

function App() {
  return (
    <>
      
       <div className='container'>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/about" element={<About />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/galery" element={<Galery />} />
        </Routes>
       </div>
    </>
  )
}

export default App
