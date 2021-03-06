import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"


export const NavBar =() => {
   
        return (
            <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">

                <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/books">My Library</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/books/create">Add Book</Link>
                    </li>
                    
                </ul>
                <span className="navbar-text">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        
                    </ul>
                </span>
            </nav>
        )
    }


export default NavBar