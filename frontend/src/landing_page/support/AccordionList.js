import React from "react";
import "./AccordianList.css";

function AccordionList() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-8">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item mb-4 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <i class="fa-solid fa-circle-plus me-3"></i> Account Opening
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <ul>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Residential individual
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Minor
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Non Residential Indian (NRI)
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Company, Partnership, HUF and LLP
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Glossary
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item  mb-4 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i class="fa-solid fa-user me-3"></i> Your Zerodha Account
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <ul>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Your Profile
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Account modifications
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Client Master Report (CMR) and Depository Participant
                        (DP)
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Nomination
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Transfer and conversion of securities
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item mb-4 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <i class="fa-solid fa-plane me-3"></i> Kite
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <ul>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        IPO
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Trading FAQs
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Margin Trading Facility (MTF) and Margins
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Charts and orders
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Alerts and Nudges
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        General
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item mb-4 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <i class="fa-solid fa-indian-rupee-sign me-3"></i> Funds
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <ul>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Add money
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Withdraw money
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Add bank accounts
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        eMandates
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item mb-4 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <i class="fa-solid fa-terminal me-3"></i> Console
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <ul>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Corporate actions
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Funds statement
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Reports
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Profile
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Segments
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item mb-4 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <i class="fa-solid fa-coins me-3"></i> Coin
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <ul>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Mutual Funds
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        National Pension Scheme (NPS)
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Fixed Deposit (FD)
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Features on Coin
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        Payments and Orders
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: "none" }}>
                        General
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 ps-3">
          <div className="row announcements">
            <ul>
              <li>
                <a href="#">
                  Exclusion of F&O contracts on 8 securities from August 29,
                  2025
                </a>
              </li>
              <li>
                <a href="#">
                  Revision in expiry day of Index and Stock derivatives
                  contracts
                </a>
              </li>
            </ul>
          </div>
          <div className="row quickLinks">
            <a href="#" id="quickLinkText" className="border" style={{textDecoration:"none",color:"black"}} >Quick links</a>
            <a className="border" href="#" style={{textDecoration:"none"}}>1. Track account opening</a>
            <a className="border" href="#" style={{textDecoration:"none"}}>2. Track segment activation</a>
            <a className="border" href="#" style={{textDecoration:"none"}}>3. Intraday margins</a>
            <a className="border" href="#" style={{textDecoration:"none"}}>4. Kite user manual</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordionList;
