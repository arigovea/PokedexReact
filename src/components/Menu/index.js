import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {Nav, NavItem} from "reactstrap";

class Menu extends Component {
    render(){
    return <div>
         <Nav tabs>
         <NavItem>
            <NavLink to ='/'>Search</NavLink>
         </NavItem>
         <NavItem>
            <NavLink to ='/pokedex'>Pokedex</NavLink>
         </NavItem>
         <NavItem>
            <NavLink to ='/profile'>Profile</NavLink>
         </NavItem>
      </Nav>
    </div>
    }
}

export default Menu
