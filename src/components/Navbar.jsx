import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/bio">BIO</Link>
                </li>
                <li>
                    <Link to="/publication">Publication</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/most">Most</Link>
                </li>
                <li>
                    <Link to="/teaching">Teaching</Link>
                </li>
                <li>
                    <Link to="/academic_service">Academic Service</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;