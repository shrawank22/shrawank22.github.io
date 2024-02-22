import React from "react";
import { Modal } from "react-bootstrap";
import { Icon } from "@iconify/react";
import AwesomeSlider from "react-awesome-slider";
import '../assets/slider.scss'
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";


const ProjectDetailsModal = ({ data, onHide, show }) => {
    let technologies, images, title, description, url, tech, img;

    if (data) {
        technologies = data.technologies;
        images = data.images;
        title = data.title;
        description = data.description;
        url = data.url;

        if (technologies) {
            tech = technologies.map((icons, i) => (
                <li className="list-inline-item mx-3" key={i}>
                    <span>
                        <div className="text-center">
                            <i className={icons.class} style={{ fontSize: "300%" }}>
                                <p className="text-center" style={{ fontSize: "30%" }}>
                                    {icons.name}
                                </p>
                            </i>
                        </div>
                    </span>
                </li>
            ));
        }

        if (images) {
            img = images.map((elem, i) => <div key={i} data-src={elem} />);
        }
    }

    return (
        <Modal
            onHide={onHide}
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal-inside"
        >
            <span onClick={onHide} className="modal-close">
                <i className="fas fa-times fa-2x close-icon"></i>
            </span>
            <div className="col-md-12">
                <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
                    <div className="slider-tab">
                        <Icon icon="noto:red-circle" />{" "}&nbsp;{" "}
                        <Icon icon="noto:yellow-circle" />{" "}&nbsp;{" "}
                        <Icon icon="noto:green-circle" />
                    </div>

                    <AwesomeSlider
                        animation="scaleOutAnimation"
                        className="slider-image"
                    >
                        {img}
                    </AwesomeSlider>

                </div>
                <div className="col-md-10 mx-auto">
                    <h3 style={{ padding: "5px 5px 0 5px" }}>
                        {title}
                        {url ? (
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-href"
                            >
                                <i
                                    className="fas fa-external-link-alt"
                                    style={{ marginLeft: "10px" }}
                                ></i>
                            </a>
                        ) : null}
                    </h3>
                    <p className="modal-description">{description}</p>
                    <div className="col-md-12 text-center">
                        <ul className="list-inline mx-auto">{tech}</ul>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ProjectDetailsModal;