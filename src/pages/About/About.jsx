import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const About = () => (<Jumbotron className="bg-info mt-5">
    <h1>Hello, Guys!</h1>
    <p>
        This is app for your favorite quotes.
    </p>
    <div className="d-flex flex-column align-items-start">
        <h3>
            Developer name: Yevgeniy
        </h3>
        <a href="tel:87076570252" className="btn btn-dark my-3">Call Yevgeniy 8-707-657-0252</a>
        <a href="https://t.me/yevgeniy_ten" className="btn btn-dark">Telegram: yevgeniy_ten</a>
    </div>
</Jumbotron>)
export default About