/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Stats() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h3 className="mb-5">Trust with confidence</h3>
          <div className="mb-5">
            <h4 className="mb-3">Customer-first always</h4>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India's largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div className="mb-5">
            <h4 className="mb-3">No spam or gimmicks</h4>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              <br></br>
              <a style={{ textDecoration: "none" }} href="#">
                Our philosophies.
              </a>
            </p>
          </div>
          <div className="mb-5">
            <h4 className="mb-3">The Zerodha universe</h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="mb-5">
            <h4 className="mb-3">Do better with money</h4>
            <p className="text-muted">
              With initiatives like{" "}
              <a style={{ textDecoration: "none" }} href="#">
                Nudge
              </a>{" "}
              and{" "}
              <a style={{ textDecoration: "none" }} href="#">
                Kill Switch
              </a>
              , we don't just facilitate transactions, but actively help you do
              better with your money.
            </p>
          </div>
        </div>
        <div className="col-6">
          <img
            className="mt-5"
            style={{ width: "100%" }}
            src="media/images/ecosystem.png"
            alt="ecosystem"
          />
          <div className="mt-4 text-center">
            <a style={{ textDecoration: "none" }} href="#">
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a className="ms-5" style={{ textDecoration: "none" }} href="#">
              Try kite demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
