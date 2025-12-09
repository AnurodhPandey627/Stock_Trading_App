/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Team() {
  return (
    <>
      <div className="container">
        <div className="row text-center" style={{ opacity: "0.8" }}>
          <h3>People</h3>
        </div>
        <div className="row">
          <div className="col-6 p-5 text-center">
            <img
              src="/media/images/nithinKamath.jpg"
              alt="Nithin Kamath"
              style={{ width: "60%", borderRadius: "100%" }}
            />
            <h5 className="mt-3">Nithin Kamath</h5>
            <p className="mt-3">Founder, CEO</p>
          </div>
          <div className="col-6 pt-5 pb-5 pe-5" style={{fontSize:"1.1rem"}}>
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on{" "}
              <a style={{ textDecoration: "none" }} href="#">
                Homepage
              </a>{" "}
              /{" "}
              <a style={{ textDecoration: "none" }} href="#">
                TradingQnA
              </a>{" "}
              /{" "}
              <a style={{ textDecoration: "none" }} href="#">
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
