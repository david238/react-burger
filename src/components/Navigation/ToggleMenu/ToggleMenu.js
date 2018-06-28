import React from 'react';
import toggleMenuImg from '../../../assets/images/burger.svg';
import classes from './ToggleMenu.css';

const toggleMenu = (props) => (
    <div className={classes.ToggleMenu}>
         <img src={toggleMenuImg} alt="myToggle" onClick={props.clicked}/>
    </div>
);

export default toggleMenu;