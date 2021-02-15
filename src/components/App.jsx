import React, {Component} from "react";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import Buzz from "./Buzz.jsx";
import What from "./What.jsx";
import Frameworks from "./Frameworks.jsx";


export default class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Hero/>
                <Buzz/>
                <What/>
                <Frameworks/>
            </div>
        )
    }
}