import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Image/heading.png";
import './Header.css'


export default function Header() {
  
  const [fix, setFix] = useState(false)

  function setFixed() {
    if (window.scrollY) {
      setFix(true)
    } else { setFix(false) }
  }
    window.addEventListener('scroll', setFixed)

  return (
    <div className= {` navbar bg-violet-900  ${ fix ? 'navbar fixed':'navbar' } `} >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                className={`mr-3 text-lg font-semibold text-violet-900 
                ${({ isActive, }) => (isActive ? "active" : undefined)}`}
                to="/home"> Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={`mr-3 text-lg font-semibold text-violet-900 ${({
                  isActive,
                }) => (isActive ? "active" : undefined)}`}
                to="/topics"
              >
                Topic
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`mr-3 text-lg font-semibold text-violet-900 
                ${({isActive,}) => (isActive ? "active" : undefined)}`}
                to="/statistics"
              >
                Status
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`mr-3 text-lg font-semibold text-violet-900 ${({
                  isActive,
                }) => (isActive ? "active" : undefined)}`}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <img className="h-16" src={logo} alt="" />
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-3xl text-white font-bold"
        >
          Quizzy !
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink
              className={`mr-3 font-bold text-lg  text-white ${({
                isActive,
              }) => (isActive ? "active" : undefined)}`}
              to="/home"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={`mr-3 text-lg font-bold text-white ${({
                isActive,
              }) => (isActive ? "active" : undefined)}`}
              to="/topics"
            >
              Topic
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`mr-3 text-lg font-bold text-white ${({
                isActive,
              }) => (isActive ? "active" : undefined)}`}
              to="/statistics"
            >
              Status
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`mr-3 text-lg font-bold text-white ${({
                isActive,
              }) => (isActive ? "active" : undefined)}`}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
  
};