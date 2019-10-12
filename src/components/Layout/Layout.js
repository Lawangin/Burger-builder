import React, { Component } from "react";

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    toggleSideDrawerHandler = () => {
        // Below will work but not cleanly as it is not async and might
        // this.setState({ showSideDrawer: !this.state.showSideDrawer })
        // therefore using the function below will work better
        this.setState( (prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.toggleSideDrawerHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;