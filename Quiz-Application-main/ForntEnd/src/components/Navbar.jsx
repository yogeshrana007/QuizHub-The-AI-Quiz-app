import React from "react";

function Navbar() {
    const NavItem = (
        <>
            <li>
                <a href="/" className="text-lg mx-5 px-2  ">
                    Home
                </a>
            </li>
            <li>
                <a href="/Student" className="text-lg mx-5 px-1  ">
                    Student
                </a>
            </li>
            <li>
                <a href="/Teacher" className="text-lg mx-5 px-2  ">
                    Teacher
                </a>
            </li>
            <li>
                <a className="text-lg mx-5 px-2  " href="/ContactUs">
                    Contact
                </a>
            </li>
            <li>
                <a className="text-lg mx-5 px-2  " href="/AboutUs">
                    About
                </a>
            </li>
            <li>
                <a href="/Login" className="text-lg mx-5 px-2  ">
                    Login
                </a>
            </li>
            <li>
                <a href="/SignUp" className="text-lg mx-5 px-2  ">
                    Sign Up
                </a>
            </li>
        </>
    );
    return (
        <>
            <div className="max-w-screen-2xl bg-black text-white pb-2 pt-1  container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ">
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {" "}
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />{" "}
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                {NavItem}
                            </ul>
                        </div>
                        <a className="text-4xl font-bold cursor-pointer text-green-500">
                            🎯QuizAPP
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{NavItem}</ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
