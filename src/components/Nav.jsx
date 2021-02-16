import React, { useEffect, useState } from "react";

const Nav = ({}) => {

    const [show, setShow] = useState(false);
    const [mobile, setMobile] = useState(window.innerWidth <= 500);

    useEffect(() => {

        window.onresize = () => {
            setMobile(window.innerWidth <= 500);
        }

        return () => {
            window.onresize = null;
        }
    }, []);

    return (
        <div className="nav">
            <h1>Agile</h1>
            
            <button onClick={() => setShow(!show)} className="nav__toggle">
                Menu
            </button>
            {  (show || !mobile) &&
                <div className="nav__links">
                    <a href="#">About</a>
                    <a href="#">Frameworks</a>
                    <a href="#">Comparisons</a>
                </div>
            }
        </div>
    )
}

export default Nav;