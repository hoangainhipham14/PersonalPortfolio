import React from "react";

const Contact = () => {
    return (
        <div className="padding-block-600 vertical-flow-large">
            <h2 className="fs-secondary-heading">Contact</h2>
            <div className="flex-horizontal-center">
                <form action="#" className="contact-form vertical-flow-large">
                    <div className="stack vertical-flow">
                        <label htmlFor="first name">Name</label>
                        <input
                            type="text"
                            name="full name"
                            id="full name"
                            autoComplete="full name"
                            aria-describedby="fullname-desc"
                            required
                        />
                    </div>
                    <div className="stack vertical-flow">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            aria-describedby="email-error"
                            required
                        />
                    </div>
                    <div className="stack vertical-flow">
                        <label htmlFor="message">Message</label>
                        <textarea
                            rows="4"
                            cols="50"
                            name="message"
                            id="message"
                            aria-describedby="message-error"
                            required
                        />
                    </div>
                    <button className="primary-button">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
