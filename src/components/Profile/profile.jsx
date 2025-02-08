import React from "react";
import "./profile.css";
// import profile from "../../Assets/profile.jpg";
import { FaPhone } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoIosPricetags } from "react-icons/io";

const StarRating = ({ rating }) => {
  return (
    <div style={{ marginLeft: "10px" }}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>{index < rating ? <FaStar /> : <CiStar />}</span>
      ))}
    </div>
  );
};

const Profile = () => {
  const data = {
    star: 1,
    name: "Kathir",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vel asperiores numquam. Accusamus ad suscipit est culpa animi modi eos atque molestias fugiat libero, nihil minus et in rerum sequi aliquid dignissimos officiis doloribus quod accusantium explicabo vel eum odit ut. Molestias a porro dicta similique nostrum ipsa atque temporibus eaque vero ex. In ullam porro necessitatibus ut ipsum reprehenderit suscipit dolor vitae praesentium nam fugiat nesciunt, architecto quibusdam voluptate qui harum vero sit, molestiae consequatur, pariatur similique deserunt id cupiditate. Unde modi ipsam omnis maiores maxime sint assumenda distinctio suscipit inventore alias quas incidunt et, natus animi neque facere! Incidunt nisi deleniti inventore et officia tenetur voluptates eaque, blanditiis dicta quam amet, hic dignissimos quidem sunt. Unde, necessitatibus ratione dolorem voluptatibus commodi veritatis tempore eligendi tenetur? Magnam architecto a, iusto rerum tempore cumque nulla, illum dicta tempora ratione earum culpa reprehenderit, harum eum veritatis porro similique commodi et quos nobis. Quae cumque blanditiis consectetur repellat labore, maiores eligendi veniam nisi vitae esse officia sequi ipsa quod minus voluptates repellendus id. Unde nesciunt officia iure harum similique. ",
    profession: "Carpenter",
    experience: "5 years",
    servicesoffered:
      "Custom Furniture Design & Build Cabinet Installation & Repair Height Top 911.21px 547.58px 214.6px Interior Woodwork & Trim Left 426.5px Outdoor Decks & Pergolas Wooden Flooring & Staircases",
    // skills: "5",
    location: "Gandhipuram, R.S. Puram, Saibaba Colony",
    availableDays: ["Sunday", "Wednesday", "Friday", "Saturday"],
    rating: "4.8",
    reviews: "10000",
    price: "₹1500/Hour",
    postedDate: "12-12-2023",
    profilePicture:
      "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
  };

  return (
    <div className="service-profile-flex-box">
      <div className="service-profile-container">
        <div className="service-profile-header">
          <div className="service-profile-icons">
            <IoMdArrowRoundBack className="service-profile-icon" />
            <IoMdArrowRoundBack className="service-profile-icon" />
            <IoMdArrowRoundBack className="service-profile-icon" />
            <BsThreeDots className="service-profile-iconspe" />
          </div>
        </div>
        <div className="service-profile-overall-content">
          <div className="service-profile-overview">
            <div className="service-profile-circle">
              <img src={data.profilePicture} alt="" />
            </div>
            <div className="service-profile-user">
              <h2 className="service-profile-card-name">
                {data.name} <MdVerified />
              </h2>
              <p className="service-profile-card-profession">{data.profession}</p>
            </div>
            <div className="service-profile-review">
              <div className="service-profile-rating">{data.rating}</div>
              <div className="service-profile-line"></div>
              <div className="service-profile-based">
                <StarRating rating={data.star} />
                <div className="service-profile-review-number">
                  Based on {data.reviews} Reviews
                </div>
              </div>
            </div>
            <div className="service-profile-posted">Posted on {data.postedDate}</div>
          </div>
          <div className="service-profile-experience">
            <div className="service-profile-content">
              <div className="service-profile-about">
                <h3>About:</h3>
                <p>{data.about}</p>
              </div>
              <br />
              <div className="service-profile-work-experience">
                <h3>Experience: {data.experience}</h3>
              </div>
              <br />
              <div className="service-profile-special">
                <div className="service-profile-location">
                  <h3>Location:</h3>
                  <p>{data.location}</p>
                </div>
                <br />
                <div className="service-profile-servicesoffered">
                  <h3>Services Offered:</h3>
                  <p>{data.servicesoffered}</p>
                </div>
              </div>
              <br />
              <div className="service-profile-working-hours">
                <h3>Available Days:</h3>
                <div className="service-profile-box-plot">
                  <div
                    className={`service-profile-day ${
                      data.availableDays
                        .map((d) => d.toLowerCase())
                        .includes("sunday")
                        ? "service-profile-available"
                        : ""
                    }`}
                  >
                    Sun
                  </div>
                  <div
                    className={`service-profile-day ${
                      data.availableDays
                        .map((d) => d.toLowerCase())
                        .includes("monday")
                        ? "service-profile-available"
                        : ""
                    }`}
                  >
                    Mon
                  </div>
                  <div
                    className={`service-profile-day ${
                      data.availableDays
                        .map((d) => d.toLowerCase())
                        .includes("tuesday")
                        ? "service-profile-available"
                        : ""
                    }`}
                  >
                    Tue
                  </div>
                  <div
                    className={`service-profile-day ${
                      data.availableDays
                        .map((d) => d.toLowerCase())
                        .includes("wednesday")
                        ? "service-profile-available"
                        : ""
                    }`}
                  >
                    Wed
                  </div>
                  <div
                    className={`service-profile-day ${
                      data.availableDays
                        .map((d) => d.toLowerCase())
                        .includes("thursday")
                        ? "service-profile-available"
                        : ""
                    }`}
                  >
                    Thu
                  </div>
                  <div
                    className={`service-profile-day ${
                      data.availableDays
                        .map((d) => d.toLowerCase())
                        .includes("friday")
                        ? "service-profile-available"
                        : ""
                    }`}
                  >
                    Fri
                  </div>
                  <div
                    className={`service-profile-day ${
                      data.availableDays
                        .map((d) => d.toLowerCase())
                        .includes("saturday")
                        ? "service-profile-available"
                        : ""
                    }`}
                  >
                    Sat
                  </div>
                </div>
              </div>
              <br />
              <div className="service-profile-special2">
                <div className="service-profile-call">
                  <div className="service-profile-callsym">
                    <FaPhone />
                  </div>
                  <p>Call</p>
                </div>
                <div className="service-profile-price">
                  <div className="service-profile-pricesym">
                    <IoIosPricetags />
                  </div>
                  <p>{data.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
