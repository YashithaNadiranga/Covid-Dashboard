import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/navigation";

class App extends Component {
    render() {
        return (
                <Router>
                    <Navigation />
                        <Switch>
                            <Route exact path={"/"} component={Home}></Route>
                            <Route exact path={"/about"} component={About}></Route>
                            <Route exact path={"/contact"} component={Contact}></Route>
                        </Switch>
                </Router>
        );
    }
}

export default App;
