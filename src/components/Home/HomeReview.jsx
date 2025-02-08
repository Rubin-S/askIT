import React from "react";
import './styles/HomeReview.css';

function Review(){
    return (
        <div className="home-review">
            <div className="home-review-content">
                <div className="home-review-content-text">
                <h2>What our Coustumer say</h2>
                <p>Rated 4.7/5 based on 28,370 reviews Showing our 4 & 5 star reviews</p>
                </div>
                <div className="home-review-cards">
                <div className="home-review-card">
                        <div className="home-review-card-content">
                            <h3>Great Work</h3>
                            <p>“I was able to find a reliable service provider in minutes. I highly recommend ASKIT to anyone who needs a service.”</p>
                        </div>
                        <div className="home-review-card-image">
                            <img src="review-image1.png" alt="John Doe" />
                            <div className="home-review-card-username">
                                <p>John Doe</p><hr/><p>@JohnDoe4567</p>
                            </div>
                        </div>
                    </div>
                    <div className="home-review-card">
                        <div className="home-review-card-content">
                            <h3>Great Work</h3>
                            <p>“I was able to find a reliable service provider in minutes. I highly recommend ASKIT to anyone who needs a service.”</p>
                        </div>
                        <div className="home-review-card-image">
                            <img src="home-review-image1.png" alt="John Doe" />
                            <div className="home-review-card-username">
                                <p>John Doe</p><hr/><p>@JohnDoe4567</p>
                            </div>
                        </div>
                    </div>
                    <div className="home-review-card">
                        <div className="home-review-card-content">
                            <h3>Great Work</h3>
                            <p>“I was able to find a reliable service provider in minutes. I highly recommend ASKIT to anyone who needs a service.”</p>
                        </div>
                        <div className="home-review-card-image">
                            <img src="review-image1.png" alt="John Doe" />
                            <div className="home-review-card-username">
                                <p>John Doe</p><hr/><p>@JohnDoe4567</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Review;