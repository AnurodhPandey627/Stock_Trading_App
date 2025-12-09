/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function ChargesExplanation() {
  return (
    <div className="container">
      <div className="row p-5">
        <h4 className="mb-5">Charges explained</h4>
        <div className="col-6 pe-3">
          <div>
            <p style={{ fontSize: "1.1rem" }}>
              Securities/Commodities transaction tax
            </p>
            <p style={{ fontSize: "0.8rem" }}>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p style={{ fontSize: "0.8rem" }}>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
          </div>
          <div>
            <p style={{ fontSize: "1.1rem" }}>Transaction/Turnover Charges</p>
            <p style={{ fontSize: "0.8rem" }}>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p style={{ fontSize: "0.8rem" }}>
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>
            <p style={{ fontSize: "0.8rem" }}>
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </p>
            <p style={{ fontSize: "0.8rem" }}>
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </p>
            <p style={{ fontSize: "0.8rem" }}>
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </p>
          </div>
          <div>
            <p style={{ fontSize: "1.1rem" }}>Call & trade</p>
            <p style={{ fontSize: "0.8rem" }}>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>
          </div>
          <div>
            <p style={{ fontSize: "1.1rem" }}>Stamp charges</p>
            <p style={{ fontSize: "0.8rem" }}>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
          </div>
          <div>
            <p style={{ fontSize: "1.1rem" }}>Account with debit balance</p>
            <p style={{ fontSize: "0.8rem" }}>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
          </div>
        </div>
        <div className="col-6 ps-4">
          <div>
            <p style={{ fontSize: "1.1rem" }}>GST</p>
            <p style={{ fontSize: "0.8rem" }}>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
          </div>
          <div>
            <p style={{ fontSize: "1.1rem" }}>SEBI charges</p>
            <p style={{ fontSize: "0.8rem" }}>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
          </div>
          <div>
            <p style={{ fontSize: "1.1rem" }}>Pledging charges</p>
            <p style={{ fontSize: "0.8rem" }}>
              ₹30 + GST per pledge request per ISIN.
            </p>
          </div>
          <div>
            <p style={{ fontSize: "1.1rem" }}>Corporate action order charges</p>
            <p style={{ fontSize: "0.8rem" }}>
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.
            </p>
          </div>
          <div>
            <p style={{ fontSize: "1.1rem" }}>Off-market transfer charges</p>
            <p style={{ fontSize: "0.8rem" }}>₹25 per transaction.</p>
          </div>
          <div>
            <p style={{ fontSize: "1.1rem" }}>Physical CMR request</p>
            <p style={{ fontSize: "0.8rem" }}>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
          </div>
          <div>
            <p style={{ fontSize: "1.1rem" }}>Payment gateway charges</p>
            <p style={{ fontSize: "0.8rem" }}>
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>
          </div>
          <div>
            <p style={{ fontSize: "1.1rem" }}>Delayed Payment Charges</p>
            <p style={{ fontSize: "0.8rem" }}>
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account.{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Learn more
              </a>
              .
            </p>
          </div>
        </div>
        <div className="row pt-3 mb-3">
          <p style={{ fontSize: "1.1rem" }}>Disclaimer</p>
          <p style={{ fontSize: "0.8rem" }}>
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChargesExplanation;
