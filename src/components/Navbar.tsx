import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar">
            <div><NavLink to="/" style={({ isActive }) =>
                isActive
                    ? {
                        color: "rgb(182, 166, 228)",
                        textDecoration: "underline",
                    }
                    : { color: "rgba(255, 255, 255, 0.87)" }
            }><p>Home</p></NavLink></div>
            <div><NavLink to="/about" style={({ isActive }) =>
                isActive
                    ? {
                        color: "rgb(182, 166, 228)",
                        textDecoration: "underline",
                    }
                    : { color: "rgba(255, 255, 255, 0.87)" }
            }><p>About</p></NavLink></div>
            <div><NavLink to="/projects" style={({ isActive }) =>
                isActive
                    ? {
                        color: "rgb(182, 166, 228)",
                        textDecoration: "underline",
                    }
                    : { color: "rgba(255, 255, 255, 0.87)" }
            }><p>Projects</p></NavLink></div>
        </div>
    );
}

export default Navbar;