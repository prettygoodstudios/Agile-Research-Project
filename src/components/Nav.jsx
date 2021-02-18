import React, { useEffect, useState } from "react";
import { route, updateUrl } from "../helpers/router";

const Nav = ({}) => {

    const [show, setShow] = useState(false);
    const [mobile, setMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {

        window.onresize = () => {
            setMobile(window.innerWidth <= 600);
        }

        return () => {
            window.onresize = null;
        }
    }, []);

    return (
        <div className="nav">
            <h1>What is Agile?</h1>
            
            <button onClick={() => setShow(!show)} className="nav__toggle">
                Menu
            </button>
            <div className="nav__links" style={(mobile && !show) ? {maxHeight: 0, opacity: 0, marginTop: -20} : {}}>
                <a onClick={() => route("about")}>About</a>
                <a onClick={() => route("frameworks")}>Frameworks</a>
                <a onClick={() => route("industry")}>Industry</a>
            </div>
        </div>
    )
}

export default Nav;