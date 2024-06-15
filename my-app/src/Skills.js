import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faTerminal,
    faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    return (
        <section id="skills" className="padding-block-600 vertical-flow-large">
            <h2 className="fs-secondary-heading">Skills</h2>
            <div className="flex-container">
                <div className="flex-small-column vertical-flow card grid-center">
                    <FontAwesomeIcon icon={faCode} />
                    <h3 className="fs-third-heading">Frontend</h3>
                    <p className="center-align">
                        HTML5, CSS3, JavaScript, TypeScript, ReactJS
                    </p>
                </div>
                <div className="flex-small-column vertical-flow card grid-center">
                    <FontAwesomeIcon icon={faTerminal} />
                    <h3 className="fs-third-heading">Backend</h3>
                    <p className="center-align">
                        NodeJS, ExpressJS, SQL, AWS, Java, Python
                    </p>
                </div>
                <div className="flex-small-column vertical-flow card grid-center">
                    <FontAwesomeIcon icon={faCodeBranch} />
                    <h3 className="fs-third-heading">Tools</h3>
                    <p className="center-align">
                        Git, VS Code, NPM, Yarn, Agile
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
