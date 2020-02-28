import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Menu extends Component {
    render(){
    return <div>
         <nav>
        <ul>
          <li>
            <Link to ='/'>Search</Link>
          </li>
          <li>
            <Link to ='/pokedex'>Pokedex</Link>
          </li>
          <li>
            <Link to ='/profile'>Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
    }
}

export default Menu