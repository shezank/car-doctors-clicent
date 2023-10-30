import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";


const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const navLinks = <>

        <NavLink to='/'><li><button>Home</button></li></NavLink>
        <NavLink to='/'><li><button>About</button></li></NavLink>
        <NavLink to='/'><li><button>Services</button></li></NavLink>
        <NavLink to='/'><li><button>Blog</button></li></NavLink>
        <NavLink to='/'><li><button>Contact</button></li></NavLink>
        {user ?
            <>
                <li><button onClick={handleLogout}>Logout</button></li>
                <NavLink to='/bookings'><li><button>Bookings</button></li></NavLink>
            </>
            :
            <NavLink to='/login'><li><button>Login</button></li></NavLink>}


    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className="h-12" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-primary">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;