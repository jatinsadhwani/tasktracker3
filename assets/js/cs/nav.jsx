import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';

export default function Nav(params){
    return <nav className="navbar navbar-dark bg-dark navbar-expand">
        <span className="navbar-brand">
          Task Tracker
        </span>
        <ul className="navbar-nav mr-auto">
         <NavItem>
            <NavLink to ="/" exact={true} activeClassName="active" className="nav-link">
                Tasks
            </NavLink>
         </NavItem>
         <NavItem>
            <NavLink to ="/users" exact={false} activeClassName="active" className="nav-link">
                Users
            </NavLink>
         </NavItem>
        </ul>
        <span class="navbar-text">
          user@host
        </span>
      </nav>;
}
        
