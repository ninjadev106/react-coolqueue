import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">                
                <NavLink exact to="/" className="nav-item nav-link" style={{ color: 'white'}}>Cool Queue</NavLink>
                <div class="collapse navbar-collapse">                    
                    <div class="navbar-nav ml-auto">
                        <NavLink exact to="/login" className="nav-item nav-link" activeStyle={{ color: 'white'}}>Login</NavLink>
                        <NavLink exact to="/register" className="nav-item nav-link" activeStyle={{ color: 'white'}}>Register</NavLink>                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

export {Nav}