import React from "react";

const Contact = () => (
    <>
        <h2>Contact Us</h2>
        <form className="mt-3">

            <input type="text" className="form-control mb-2" placeholder="Your Name" />
            <input type="email" className="form-control mb-2" placeholder="Your Email" />
            <textarea className="form-control mb-2" placeholder="Message"></textarea>

            <button className="btn btn-primary">Submit</button>
        </form>
    </>
);

export default Contact;
