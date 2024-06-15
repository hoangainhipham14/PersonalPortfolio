import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import AikoPetMate from "./assets/images/AikoPetMate.png";

const Project = () => {
    return (
        <section id="project">
            <div className="padding-block-600 vertical-flow-large">
                <h2 className="fs-secondary-heading">Project</h2>
                <div className="project-image">
                    <img
                        className="project-img"
                        src={AikoPetMate}
                        alt="Aiko Pet Mate"
                    />
                </div>
                <div className="vertical-flow">
                    <h3 className="fs-third-heading">Overview</h3>
                    <p>
                        orem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="vertical-flow">
                    <h3 className="fs-third-heading horizontal-flow">
                        <FontAwesomeIcon icon={faPuzzlePiece} />
                        <span>The Challenge</span>
                    </h3>
                    <p>
                        orem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="vertical-flow">
                    <h3 className="fs-third-heading  horizontal-flow">
                        <FontAwesomeIcon icon={faAndroid} />
                        <span>The Solution</span>
                    </h3>
                    <p>
                        orem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className="flex-container">
                        <div className="flex-small-column">
                            <div className="project-image">
                                <img
                                    className="project-img"
                                    src={AikoPetMate}
                                    alt="Aiko Pet Mate"
                                />
                            </div>
                        </div>
                        <div className="flex-small-column">
                            <div className="project-image">
                                <img
                                    className="project-img"
                                    src={AikoPetMate}
                                    alt="Aiko Pet Mate"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
