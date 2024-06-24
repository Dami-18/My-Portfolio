import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.scss'
import Home from "./pages/Home"
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './pages/Footer'

function App() {

  return (
    <div className='App'>
      <div className='main'>
        <Router>
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
