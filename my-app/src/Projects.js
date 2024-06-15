import React from "react";
import { useNavigate } from "react-router-dom";
import Nhi from "./assets/images/Nhi.jpg";
import AikoPetMate from "./assets/images/AikoPetMate.png";

const Projects = () => {
    const navigate = useNavigate();

    const viewSite = (title) => {
        navigate(`/project/${title}`);
    };

    const toGitHub = (title) => {
        window.location.href = `https://github.com/hoangainhipham14/${title}`;
    };

    return (
        <section id="projects">
            <div className="padding-block-600 vertical-flow-large">
                <h2 className="fs-secondary-heading">Projects</h2>
                <div className="project-wrapper">
                    <div className="project-details vertical-flow grid-vertical-center">
                        <h3 className="fs-third-heading">Aiko Pet Mate</h3>
                        <p>
                            orem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                        <div className="horizontal-flow">
                            <button
                                className="primary-button"
                                onClick={() => viewSite("aiko-pet-mate")}
                            >
                                View Site
                            </button>
                            <button
                                className="primary-button"
                                onClick={() => toGitHub()}
                            >
                                GitHub
                            </button>
                        </div>
                    </div>
                    <div className="project-image">
                        <img
                            className="project-img"
                            src={AikoPetMate}
                            alt="Aiko Pet Mate"
                        />
                    </div>
                </div>
                <div className="project-wrapper">
                    <div className="project-image">
                        <img className="project-img" src={Nhi} alt="Nhi Pham" />
                    </div>
                    <div className="project-details vertical-flow grid-vertical-center">
                        <h3 className="fs-third-heading">Snacks in a Van</h3>
                        <p>
                            orem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                        <div className="horizontal-flow">
                            <button
                                className="primary-button"
                                onClick={() => viewSite("snacks-in-a-van")}
                            >
                                View Site
                            </button>
                            <button
                                className="primary-button"
                                onClick={() => toGitHub()}
                            >
                                GitHub
                            </button>
                        </div>
                    </div>
                </div>
                <div className="project-wrapper">
                    <div className="project-image">
                        <img className="project-img" src={Nhi} alt="Nhi Pham" />
                    </div>
                    <div className="project-details vertical-flow grid-vertical-center">
                        <h3 className="fs-third-heading">E-Portfolio</h3>
                        <p>
                            orem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                        <div className="horizontal-flow">
                            <button
                                className="primary-button"
                                onClick={() => viewSite("e-portfolio")}
                            >
                                View Site
                            </button>
                            <button
                                className="primary-button"
                                onClick={() => toGitHub("Stage50Lockdown")}
                            >
                                GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
