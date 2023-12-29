import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Contact from "./pages/Contact/Contact"
import Login from "./pages/login/login"
import Input from './pages/dashboard/Input';
import Tabel from './pages/dashboard/Tabel';

function App() {
  return (
    <BrowserRouter>
        {/* <div className="App"> */}
        <div className='bg'>

          <Routes>
            <Route exct path='/' element={<Home/>} />
            <Route path="Login" element={<Login/>} />
            <Route path="Contact" element={<Contact/>} />
            <Route path="dashboard" element={<Input/>} />
            <Route path="Datafetch" element={<Tabel />} />
          </Routes>
        </div>
    {/* </div> */}

    </BrowserRouter>
  )
}

export default App;
