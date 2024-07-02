import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.scss'
import Home from "./components/Home"
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='App'>
      <div className='main'>
        <Router basename='/my_website/'>
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
