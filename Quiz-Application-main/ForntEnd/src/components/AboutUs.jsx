import React from "react";
import "./AboutUs.css"; // Importing the CSS file

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
                Welcome to <span className="highlight">QuizHub</span>, your
                ultimate destination for fun, engaging, and knowledge-packed
                quizzes! We aim to make learning interactive and enjoyable with
                a variety of quizzes across multiple topics.
            </p>

            {/* Features Section */}
            <div className="about-features">
                <h2 className="features-title">Why Choose Us?</h2>
                <ul className="features-list">
                    <li>✔ Engaging and fun quizzes</li>
                    <li>✔ Multiple categories to explore</li>
                    <li>✔ User-friendly interface</li>
                    <li>✔ Track your progress and scores</li>
                </ul>
            </div>

            {/* Call to Action */}
            <p className="about-cta">
                Join us on this journey of fun and learning. Start quizzing
                today and test your knowledge!
            </p>
        </div>
    );
};

export default AboutUs;
