import React from "react";
import { Icon } from "@iconify/react";


const About = ({ sharedBasicInfo, resumeBasicInfo }) => {
    let profilepic = sharedBasicInfo ? sharedBasicInfo.image : "";
    let sectionName = resumeBasicInfo ? resumeBasicInfo.section_name.about : "";
    let hello = resumeBasicInfo ? resumeBasicInfo.description_header : "";
    let about = resumeBasicInfo ? resumeBasicInfo.description : "";

    return (
        <section id="about">
            <div className="col-md-12">
                <h1 style={{ color: "black" }}>
                    <span>{sectionName}</span>
                </h1>
                <div className="row center mx-auto mb-5">
                    <div className="col-md-4 mb-5 center">
                        <div className="polaroid">
                            <span style={{ cursor: "auto" }}>
                                <img
                                    height="250px"
                                    src={profilepic}
                                    alt="Avatar placeholder"
                                />
                                <Icon
                                    icon="logos:react"
                                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                                />

                                <Icon
                                    icon="vscode-icons:file-type-js-official"
                                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                                />

                                <Icon icon="vscode-icons:file-type-node"
                                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                                />

                                <Icon icon="logos:html-5"
                                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                                />

                                <Icon icon="devicon:mongodb-wordmark"
                                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                                />
                            </span>
                        </div>
                    </div>

                    <div className="col-md-8 center">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="card-header">
                                    <Icon icon="noto:red-circle" />{" "}&nbsp;{" "}
                                    <Icon icon="noto:yellow-circle" />{" "}&nbsp;{" "}
                                    <Icon icon="noto:green-circle" />
                                </div>
                                <div className="card-body font-trebuchet text-justify ml-3 mr-3"
                                    style={{
                                        height: "auto",
                                        fontSize: "132%",
                                        lineHeight: "200%",
                                    }}
                                >
                                    <span className="wave">{hello} :) </span>
                                    <br />
                                    {about}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
