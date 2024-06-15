import React from "react";
import Nhi from "./assets/images/Nhi.jpg";

const About = () => {
    const downloadResume = () => {};
    return (
        <section id="about">
            <div className="padding-block-600 vertical-flow">
                <div className="flex-container">
                    <div className="flex-center flex-small-column">
                        <img src={Nhi} alt="Nhi Pham" />
                    </div>
                    <div className="left-align flex-large-column vertical-flow padding-600">
                        <h1 className="fs-primary-heading">Hi, I'm Nhi Pham</h1>
                        <h3 className="fs-third-heading">
                            Full Stack Web Developer
                        </h3>
                        <p>
                            With two years of experience working at a startup, I
                            like to wear many hats and learn new things
                            everyday. I love creating clean and user-friendly
                            products that make a positive impact
                        </p>
                        <button
                            className="primary-button"
                            onClick={() => downloadResume()}
                        >
                            View Resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
