import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Navbar />

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  )
}

export default App
