import React, {Component} from "react";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import Buzz from "./Buzz.jsx";
import What from "./What.jsx";
import Frameworks from "./Frameworks.jsx";
import Comparisons from "./Comparisons.jsx";
import Keys from "./Keys.jsx";
import Industy from "./Industry.jsx";
import Conclude from "./Conclude.jsx";
import Learn from "./Learn.jsx";


export default class App extends Component {

    componentDidMount() {
        //loadCurrentRoute();
    }

    render() {
        return (
            <div>
                <Nav/>
                <Hero/>
                <Buzz/>
                <What/>
                <Keys/>
                <Frameworks/>
                <Comparisons/>
                <Industy/>
                <Learn/>
                <Conclude/>
            </div>
        )
    }
}