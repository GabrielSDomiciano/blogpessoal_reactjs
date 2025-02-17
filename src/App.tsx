<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Cadastro from './pages/cadastro/Cadastro'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import { AuthProviderProps } from './contexts/AuthContexts'

=======
import Footer from './pages/components/footer/Footer';
import Login from './pages/components/login/Login';
import Navbar from './pages/components/navbar/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
>>>>>>> 01604b4d4bb079cb5131404604d19974d1c3dcda

function App() {
  return (
    <>
<<<<<<< HEAD
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
=======
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
>>>>>>> 01604b4d4bb079cb5131404604d19974d1c3dcda
    </>
  )
}

export default App