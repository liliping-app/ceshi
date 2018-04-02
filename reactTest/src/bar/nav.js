import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';
 const NavBar = () => (
      <div>
        <NavLink exact to='/' className="blue">手机</NavLink> |&nbsp;
        <NavLink to='/Bar02' style={{color:'yellow', fontSize:'20px'}}>盆栽</NavLink> |&nbsp;
        <NavLink to='/Bar03/react萨芬' activeClassName='active'>杯子</NavLink> |&nbsp;

        <NavLink to='/redirect' activeClassName='active'>重定向</NavLink>|&nbsp;
         <NavLink to='/react' activeClassName = 'active'>404</NavLink> |&nbsp;
      </div>
    )

export default NavBar;