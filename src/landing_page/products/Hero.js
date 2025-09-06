import React from "react";

function Hero() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5 mb-5 text-center">
          <h3 className="text-muted mt-3">Zerodha Products</h3>
          <h5 className="text-muted mt-3">Sleek, modern, and intuitive trading platforms</h5>
          <p className="mt-3 mb-5">
            Check out our{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              investment offerings →
            </a>
          </p>
          <hr className="mt-5"></hr>
        </div>
      </div>
    </>
  );
}

export default Hero;
