import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = ({ resumeExperience, resumeBasicInfo }) => {
    let sectionName = resumeBasicInfo ? resumeBasicInfo.section_name.experience : "";
    let work = resumeExperience ? resumeExperience.map((work, i) => {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
            return (
                <span className="main-badge badge text-bg-info p-2 rounded-pill" key={i}>{technology}</span>
            );
        });
        var tech = technologies.map((technology, i) => {
            return (
                <span className="experience-badge badge text-bg-light p-2 me-1" key={i}>{technology}</span>
            );
        });
        return (
            <VerticalTimelineElement
                date={work.years}
                iconStyle={{
                    background: "#AE944F",
                    color: "#fff",
                    textAlign: "center",
                }}
                icon={<i className="fab fa-angular experience-icon"></i>}
                key={i}
            >
                <div style={{ textAlign: "left", marginBottom: "4px" }}>
                    {mainTech}
                </div>

                <h3
                    className="vertical-timeline-element-title"
                    style={{ textAlign: "left" }}
                >
                    {work.title}
                </h3>
                <h4
                    className="vertical-timeline-element-subtitle"
                    style={{ textAlign: "left" }}
                >
                    {work.company}
                </h4>
                <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
            </VerticalTimelineElement>
        );
    }) : "";

    return (
        <section id="experience" className="pb-5">
            <div className="col-md-12 mx-auto">
                <div className="col-md-12">
                    <h1 className="section-title" style={{ color: "black" }}>
                        <span className="text-black" style={{ textAlign: "center" }}>
                            {sectionName}
                        </span>
                    </h1>
                </div>
            </div>
            <div className="col-md-8 mx-auto">
                <VerticalTimeline>
                    {work}
                    <VerticalTimelineElement
                        iconStyle={{
                            background: "#AE944F",
                            color: "#fff",
                            textAlign: "center",
                        }}
                        icon={
                            <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                        }
                    />
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Experience;