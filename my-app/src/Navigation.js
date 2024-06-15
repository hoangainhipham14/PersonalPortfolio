import React from "react";

const Navigation = () => {
    return (
        <section id="nav" className="padding-block-600 primary-navigation">
            <h2 className="fs-secondary-heading">Nhi Pham</h2>
            <nav>
                <ul aria-label="Primary" className="nav-list">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Navigation;
