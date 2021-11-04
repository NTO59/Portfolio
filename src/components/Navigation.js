import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div class="navigation">
            <ul>
                <NavLink to="/" exact className="hover" activeClassName="nav-active" >
                    <li>Accueil</li>
                </NavLink>

                <li className="nav-portfolio">Portfolio
                    <ul className="nav-projects">
                        <NavLink to="project-1" activeClassName="nav-active" className="hover">
                            <li>Kartina</li>
                        </NavLink>
                        <NavLink to="project-2" activeClassName="nav-active" className="hover">
                            <li>Saint-Aybert</li>
                        </NavLink>
                        <NavLink to="project-3" activeClassName="nav-active" className="hover">
                            <li>NTO PortFolio</li>
                        </NavLink>
                        

                    </ul>
                </li>
                <NavLink to="/contact" activeClassName="nav-active" className="hover">
                            <li>Contact</li>
                        </NavLink>
            </ul>
        </div>

    );
};
export default Navigation;