import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" activeStyle={{backgroundColor:'#fff',color:'var(--color-main-1)'}}>Home</Link>
                </li>
                <li>
                    <Link to="/bio" activeStyle={{backgroundColor:'#fff',color:'var(--color-main-1)'}}>BIO</Link>
                </li>
                <li>
                    <Link to="/publication" activeStyle={{backgroundColor:'#fff',color:'var(--color-main-1)'}}>Publication</Link>
                </li>
                <li>
                    <Link to="/most" activeStyle={{backgroundColor:'#fff',color:'var(--color-main-1)'}}>Most</Link>
                </li>
                <li>
                    <Link to="/research_area" activeStyle={{backgroundColor:'#fff',color:'var(--color-main-1)'}}>Project</Link>
                </li>
                <li>
                    <Link to="/teaching" activeStyle={{backgroundColor:'#fff',color:'var(--color-main-1)'}}>Teaching</Link>
                </li>
                <li>
                    <Link to="/project" activeStyle={{backgroundColor:'#fff',color:'var(--color-main-1)'}}>Student Honor</Link>
                </li>
                <li>
                    <Link to="/academic_service" activeStyle={{backgroundColor:'#fff',color:'var(--color-main-1)'}}>Academic Service</Link>
                </li>
                <li>
                    <Link to="/album" activeStyle={{backgroundColor:'#fff',color:'var(--color-main-1)'}}>Album</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
