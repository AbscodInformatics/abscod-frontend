import React from "react";
import "../../../../common/utility.css";
import "./card.css";

const Card = () => {
  return (
    <div className="">
      <div className="main-container">
        <h1 className="card-heading">
          We pursue relationships based on transparency, persistence, mutual
          trust, and integrity with our employees, customers and other business
          partners.
        </h1>
        <div className="flex" >
          <div className="flex-basis">
            <h4 className="card-description">
              Our team of specialists consistently delivers outstanding results
              combining creative ideas with our vast experience. We can help you
              build a sustainable, meaningful relationship with your clients by
              engaging them with your brand using social media.
            </h4>
          </div>
          <div className="flex-basis">
            <h4 className="card-description">
              We work in areas as diverse as search engine optimization, social
              media marketing, email marketing and digital marketing.{" "}
            </h4>
          </div>
        </div>
        <div className="flex py-5 " style={{gap:"20px", margin:"auto"}}>
          <div className="card-section card-section-1">
            <div className="card p-3 border-0 rounded-4 shadow-sm ">
              <img alt="img" src="image/time.png" className="card-img-top  img-fluid" />
              <div className="card-body">
                <h5 className="card-title">12</h5>
                <p className="card-text">Years in Marketing</p>
              </div>
            </div>
          </div>
          <div className="card-section card-section-2">
            <div className="card p-3 border-0 rounded-4 shadow-sm ">
              <img src="image/report.png" className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">143</h5>
                <p className="card-text">Analytic Reports </p>
              </div>
            </div>
          </div>
          <div className="card-section card-section-3">
            <div className="card p-3 border-0 rounded-4 shadow-sm ">
              <img src="image/message.png" className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">76</h5>
                <p className="card-text">Email Campaigns </p>
              </div>
            </div>
          </div>
          <div className="card-section card-section-4">
            <div className="card p-3 border-0 rounded-4 shadow-sm ">
              <img src="image/seo.png" className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">96</h5>
                <p className="card-text">SEO Campaigns </p>
              </div>
            </div>
          </div>
          <div className="card-section card-section-5">
            <div className="card p-3 border-0 rounded-4 shadow-sm ">
              <img src="image/team.png" className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">16</h5>
                <p className="card-text">Team Members </p>
              </div>
            </div>
          </div>
          <div className="card-section card-section-6">
            <div className="card p-3 border-0 rounded-4 shadow-sm ">
              <img src="image/first.png" className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">14</h5>
                <p className="card-text">First Positions </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
