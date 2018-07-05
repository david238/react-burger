import React from 'react';
import classes from './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active} 
            //added activeClassName because Even if navlink adds active
            // it do not match the css and the render at run time. 
            // so pinpoint the classes active to take it.    
        >
            {props.children}
        </NavLink>
    </li>
    /* USE OF NAVLINK here replaces the <a href...> and no more need to use
    className={props.active ? classes.active : null} as Navlink already specify the active link
    Just be careful of writing the proper classes for .active in your css file */
);

export default navigationItem;