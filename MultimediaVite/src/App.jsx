import './App.css'
import Navbar from './components/Navbar'
import About from './sites/About'
import Landingpage from './sites/Landingpage'
import Sales from './sites/Sales'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
       <div className='container'>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/about" element={<About />} />

        </Routes>
       </div>
    </>
  )
}

export default App
