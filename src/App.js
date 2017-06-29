import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import AppNavigator from './AppNavigator';

//Disable timer warning 
console.ignoredYellowBox = ['Setting a timer'];

class App extends Component {
    render() {
        return (
            <AppNavigator 
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                })} 
            />
        );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

//export default connect(mapStateToProps, { connectToServer })(App);
export default connect(mapStateToProps)(App);
