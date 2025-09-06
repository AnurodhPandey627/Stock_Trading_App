import React from "react";

function Universe() {
  return (
    <>
      <div className="container mt-5">
        <div className="row text-center mt-5">
          <h4 className="mb-4 mt-5 text-muted">The Zerodha Universe</h4>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="row p-5">
          <div className="col-4 p-3">
            <a href="#">
              <img
                src="media/images/zerodhaFundhouse.png"
                style={{ width: "50%" }}
              />
            </a>
            <p
              className="text-small text-muted mt-3"
              style={{ fontSize: "0.7rem", width: "60%" }}
            >
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-3">
            <a href="#">
              <img
                src="media/images/sensibullLogo.svg"
                style={{ width: "50%" }}
              />
            </a>
            <p
              className="text-small text-muted mt-3"
              style={{ fontSize: "0.7rem", width: "60%" }}
            >
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-3">
            <a href="#">
              <img src="media/images/tijori.svg" style={{ width: "50%" }} />
            </a>
            <p
              className="text-small text-muted mt-3"
              style={{ fontSize: "0.7rem", width: "60%" }}
            >
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="col-4 p-3">
            <a href="#">
              <img src="media/images/streakLogo.png" style={{ width: "50%" }} />
            </a>
            <p
              className="text-small text-muted mt-3"
              style={{ fontSize: "0.7rem", width: "60%" }}
            >
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3 mb-5">
            <a href="#">
              <img
                src="media/images/smallcaseLogo.png"
                style={{ width: "50%" }}
              />
            </a>
            <p
              className="text-small text-muted mt-3"
              style={{ fontSize: "0.7rem", width: "60%" }}
            >
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-3">
            <a href="#">
              <img src="media/images/ditto-logo.png" style={{ width: "50%" }} />
            </a>
            <p
              className="text-small text-muted mt-3"
              style={{ fontSize: "0.7rem", width: "60%" }}
            >
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup for free
          </button>
        </div>
      </div>
    </>
  );
}

export default Universe;
