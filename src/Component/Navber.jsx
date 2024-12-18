import { NavLink } from "react-router-dom";




const Navber = () => {
    return (
        <div>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Hotel Al Ara</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to={'/home'}><li className="font-bold text-2xl"><a>Home</a></li></NavLink>
                    <NavLink to={'/rooms'}> <li className="font-bold"><a>Rooms</a></li></NavLink>
                    <NavLink to={'/booked'}><li className="font-bold"><a>Our Review</a></li></NavLink>
                    <NavLink to={'/review'}> <li className="font-bold"><a>My Room</a></li></NavLink>
                    <NavLink to={'/contract'}><li className="font-bold"><a>Contract</a></li></NavLink>
                    <NavLink to={'/feature'}><li className="font-bold"><a>Feature Rooms</a></li></NavLink>
                    {/* <NavLink to={'/update'}><li className="font-bold"><a>Home Decors</a></li></NavLink> */}
                    
                </ul>

            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        
                        <NavLink to={'/login'}><li><a>Log In</a></li></NavLink>
                        <NavLink to={'/register'}><li><a>Register</a></li></NavLink>
                        <button onClick={()=>logout()} className="btn btn-error">Log Out</button>
                       
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Navber;