import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_5xe35wc",
                "template_ra2okbp",
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                "fvERtXaX7MQvgfAP_"
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setStatus("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.log("FAILED...", error);
                    setStatus("Failed to send message. Try again!");
                }
            );
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-description">
                Fill out the form below and we'll get back to you as soon as
                possible.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="contact-button">
                    Send Message
                </button>
            </form>

            {status && <p className="status-message">{status}</p>}
        </div>
    );
};

export default ContactUs;
