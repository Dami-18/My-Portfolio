import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.scss'
import Home from "./components/Home"
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

function App() {

  return (
    <div className='App'>
      <div className='main'>
      <ScrollToHashElement behavior="smooth" />
        <Router>
         <Navbar/>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
         </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App
