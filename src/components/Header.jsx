import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import { Icon } from "@iconify/react";

const Header = ({ sharedData }) => {
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        if (sharedData) {
            setTitles(sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat());
        }
    }, [sharedData]);

    const HeaderTitleTypeAnimation = React.memo(() => {
        return <Typical className="title-styles" steps={titles} loop={50} />
    }, (props, prevProp) => true);

    return (
        <header id="home">
            <div className="row aligner" style={{ height: '100%' }}>
                <div className="col-md-12">
                    <div>
                        <Icon icon="la:laptop-code" className="header-icon text-white"/>
                        <br />
                        <h1>
                            <Typical steps={[sharedData ? "Hii, I'm " + sharedData.name : ""]} wrapper="p" />
                        </h1>
                        <div className="title-container">
                            <HeaderTitleTypeAnimation />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;