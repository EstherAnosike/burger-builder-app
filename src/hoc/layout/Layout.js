import React, { Component } from 'react';

import Aux from '../aux/Aux';
import styles from './Layout.module.css';
import Toolbar from '../../components/navigation/toolbar/Toolbar';
import SideDrawer from '../../components/navigation/sideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer:false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer:false,
        })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer:!prevState.showSideDrawer};
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar ToggleSideDrawerClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>

                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}
 
export default Layout;