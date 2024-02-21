import React, { useState, useEffect } from "react";
import Typical from "react-typical";

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
        <header id="home" style={{ 
            height: window.innerHeight, 
            display: 'block', 
            backgroundImage: `url(https://images.unsplash.com/photo-1605478328994-f93e98217da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80)`,
            backgroundPosition: "center",
            backgroundSize: "cover" }}>
            <div className="row aligner" style={{ height: '100%' }}>
                <div className="col-md-12">
                    <div>
                        <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
                        <br />
                        <h1 className="mb-0">
                            <Typical className="text-white" steps={[sharedData ? sharedData.name : ""]} wrapper="p" />
                        </h1>
                        <div className="title-container text-white">
                            <HeaderTitleTypeAnimation />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;