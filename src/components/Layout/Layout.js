import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component { 

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedhandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerOpenHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer }
        });
    }

    render (){
       return  (
            <Aux>
                <Toolbar open={this.state.showSideDrawer}
                clicked={this.sideDrawerOpenHandler}/>
                <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedhandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
       );
    };
}

export default Layout;