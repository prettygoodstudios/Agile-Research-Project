import React, {Component} from "react";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";


export default class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Hero/>
            </div>
        )
    }
}