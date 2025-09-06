import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5">
        <h2 className="mt-5" style={{ opacity: "0.9" }}>
          Charges
        </h2>
        <h5 className="mt-2" style={{ opacity: "0.6" }}>
          List of all charges and taxes
        </h5>
      </div>
      <div className="row mt-5 pt-5 ps-5 pe-5">
        <div className="col-4 pt-5 ps-5 pe-5">
          <img src="media/images/pricingEquity.svg" alt="pricingEquity" />
          <h2 className="mt-3">Free equity delivery</h2>
        </div>
        <div className="col-4 pt-5 ps-5 pe-5">
          <img src="media/images/other-trades.svg" alt="otherTrades" />
          <h2 className="mt-3">Intraday and F&O trades</h2>
        </div>
        <div className="col-4 pt-5 ps-5 pe-5">
          <img src="media/images/pricingMF.svg" alt="pricingMF" />
          <h2 className="mt-3">Free direct MF</h2>
        </div>
        <div className="row">
          <div className="col-4 pb-5 pe-5" style={{fontSize:"1.1rem"}}>
            <p className="text-muted mt-3">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 pb-5 pe-5">
            <p className="text-muted mt-3" style={{fontSize:"1.1rem"}}>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 pb-5 pe-5">
            <p className="text-muted mt-3" style={{fontSize:"1.1rem"}}>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
