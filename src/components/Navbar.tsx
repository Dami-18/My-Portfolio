import { Link } from 'react-router-dom'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div><Link to ="/"><p>Home</p></Link></div>
            <div><Link to="/about"><p>About</p></Link></div>
            <div><Link to="/projects"><p>Projects</p></Link></div>
        </div>
     );
}
 
export default Navbar;