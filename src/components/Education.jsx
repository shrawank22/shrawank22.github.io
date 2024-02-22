import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = ({ resumeEducation, resumeBasicInfo }) => {
    let sectionName = resumeBasicInfo ? resumeBasicInfo.section_name.education : "";
    let education = resumeEducation ? resumeEducation.map((education, i) => {
        const subjects = education.subjects.map((technology, i) => {
            return (
                <span className="experience-badge badge text-bg-info p-2 rounded-pill" key={i}>{technology}</span>
            );
        });
  
        return (
            <VerticalTimelineElement
                date={education.years}
                iconStyle={{
                    background: "#AE944F",
                    color: "#fff",
                    textAlign: "center",
                }}
                icon={<i className="fa-brands fa-angular experience-icon"></i>}
                key={i}
            >

                <h3
                    className="vertical-timeline-element-title"
                    style={{ textAlign: "left" }}
                >
                    {education.degree}
                </h3>
                <h4
                    className="vertical-timeline-element-subtitle"
                    style={{ textAlign: "left" }}
                >
                    {education.institution}
                </h4>
                <div style={{ textAlign: "left", marginBottom: "4px" }}>
                    {subjects}
                </div>
            </VerticalTimelineElement>
        );
    }) : "";

    return (
        <section id="education" className="pb-5">
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
                    {education}
                    <VerticalTimelineElement
                        iconStyle={{ background: "#AE944F", color: "#fff", textAlign: "center" }}
                        icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
                    />
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Education;