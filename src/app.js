import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./home/home";

import './assets/css/output.css'
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} key="home" />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default App;
