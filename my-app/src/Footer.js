import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
    const toEmail = () => {};
    const toLinkedIn = () => {};
    return (
        <footer id="footer" className="padding-block-600">
            <div className="primary-footer-wrapper">
                <div className="primary-footer-contact-us">
                    <h3 className="fs-third-heading">Nhi Pham</h3>
                </div>
                <div className="primary-footer-logo-social vertical-flow">
                    <div className="primary-footer-nav">
                        <nav>
                            <ul aria-label="Footer">
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#skills">Skills</a>
                                </li>
                                <li>
                                    <a href="#projects">Projects</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="horizontal-flow">
                        <button
                            className="icon-button"
                            onClick={() => toEmail()}
                        >
                            <EmailIcon fontSize="medium" />
                        </button>
                        <button className="icon-button">
                            <LinkedInIcon fontSize="medium" />
                        </button>
                        <button className="icon-button">
                            <GitHubIcon fontSize="medium" />
                        </button>
                    </div>
                    <span>© 2024 Nhi Pham</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
