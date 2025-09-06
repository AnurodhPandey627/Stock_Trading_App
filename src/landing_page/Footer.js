import React from 'react';

function Footer() {
    return ( 
        <div className='border-top bg-body-tertiary'>
            <div className='container p-5'>
                <div className='row'>
                    <div className='col'>
                        <img style={{width:"50%"}} src='media/images/logo.svg'></img>
                        <p>&copy; 2010 - 2025, Zerodha Broking Ltd.All rights reserved.</p>
                        <div style={{opacity:"0.8"}}>
                            <i class="fa-brands fa-x-twitter me-3 fs-5" ></i>
                            <i class="fa-brands fa-square-facebook me-3 fs-5"></i>
                            <i class="fa-brands fa-instagram me-3 fs-5"></i>
                            <i class="fa-brands fa-linkedin-in me-3 fs-5"></i>
                        </div>
                        <hr></hr>
                        <div style={{opacity:"0.8"}}>
                            <i class="fa-brands fa-youtube me-3 fs-5"></i>
                            <i class="fa-brands fa-whatsapp me-3 fs-5"></i>
                            <i class="fa-brands fa-telegram me-3 fs-5"></i>
                        </div>
                    </div>
                    <div className='col'>
                        <p style={{fontWeight:"600"}}>Account</p>
                        <a href='#' style={{textDecoration:"none" ,display:"block"}}>Open demat account</a><br></br>
                        <a  href='#' style={{textDecoration:"none", display:"block"}}>Minor demat account</a><br></br>
                        <a  href='#' style={{textDecoration:"none", display:"block"}}>NRI demat account</a><br></br>
                        <a  href='#' style={{textDecoration:"none", display:"block"}}>Commodity</a><br></br>
                        <a  href='#' style={{textDecoration:"none", display:"block"}}>Dematerialisation</a><br></br>
                        <a  href='#' style={{textDecoration:"none", display:"block"}}>Fund transfer</a><br></br>
                        <a  href='#' style={{textDecoration:"none", display:"block"}}>MTF</a><br></br>
                        <a  href='#' style={{textDecoration:"none", display:"block"}}>Referral program</a>
                    </div>
                    <div className='col'>
                            <p style={{fontWeight:"600"}}>Support</p>
                            <a href='#' style={{textDecoration:"none" , display:"block"}}>Contact us</a><br></br>
                            <a href='#' style={{textDecoration:"none" , display:"block"}}>Support portal</a><br></br>
                            <a href='#' style={{textDecoration:"none" , display:"block"}}>How to file a complaint?</a><br></br>
                            <a href='#' style={{textDecoration:"none" , display:"block"}}>Status of your complaints</a><br></br>
                            <a href='#' style={{textDecoration:"none" , display:"block"}}>Bulletin</a><br></br>
                            <a href='#' style={{textDecoration:"none" , display:"block"}}>Circular</a><br></br>
                            <a href='#' style={{textDecoration:"none" , display:"block"}}>Z-Connect blog</a><br></br>
                            <a href='#' style={{textDecoration:"none" , display:"block"}}>Downloads</a><br></br>
                    </div>
                    <div className='col'>
                        <p style={{fontWeight:"600"}}>Company</p>
                        <a href='#' style={{textDecoration:"none" , display:"block"}}>About</a><br></br>
                        <a href='#' style={{textDecoration:"none" , display:"block"}}>Philosophy</a><br></br>
                        <a href='#' style={{textDecoration:"none" , display:"block"}}>Press & media</a><br></br>
                        <a href='#' style={{textDecoration:"none" , display:"block"}}>Careers</a><br></br>
                        <a href='#' style={{textDecoration:"none" , display:"block"}}>Zerodha Cares (CSR)</a><br></br>
                        <a href='#' style={{textDecoration:"none" , display:"block"}}>Zerodha.tech</a><br></br>
                        <a href='#' style={{textDecoration:"none" , display:"block"}}>Open source</a><br></br>
                    </div>
                    <div className='col'>
                        <p style={{fontWeight:"600"}}>Quick links</p>
                        <a href='#' style={{textDecoration:"none", display:"block"}}>Upcoming IPOs</a><br></br>
                        <a href='#' style={{textDecoration:"none", display:"block"}}>Brokerage charges</a><br></br>
                        <a href='#' style={{textDecoration:"none", display:"block"}}>Market holidays</a><br></br>
                        <a href='#' style={{textDecoration:"none", display:"block"}}>Economic calendar</a><br></br>
                        <a href='#' style={{textDecoration:"none", display:"block"}}>Calculators</a><br></br>
                        <a href='#' style={{textDecoration:"none", display:"block"}}>Markets</a><br></br>
                        <a href='#' style={{textDecoration:"none", display:"block"}}>Sectors</a><br></br>
                    </div>
                </div>
                <div className='text-muted mt-5' style={{fontSize:"11px",opacity:"0.8"}}>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="#" style={{textDecoration:"none"}}>complaints@zerodha.com</a>, for DP related to <a href="#" style={{textDecoration:"none"}}>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p>Procedure to file a complaint on <a href="#" style={{textDecoration:"none"}}>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p><a href="#" style={{textDecoration:"none"}}>Smart Online Dispute Resolution</a> | <a href="#" style={{textDecoration:"none"}}>Grievances Redressal Mechanism</a></p>
                    <p >Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p >Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    <p>India's largest broker based on networth as per NSE. <a href="#" style={{textDecoration:"none"}}>NSE broker factsheet</a></p>
                    <p >"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="#" style={{textDecoration:"none"}}>create a ticket here</a>.</p>
                </div>
                <div className='mx-5' >
                    <a className='p-3' href="#" style={{textDecoration:"none"}}>NSE</a>
                    <a  className='p-3' href="#" style={{textDecoration:"none"}}>BSE</a>
                    <a className='p-3' href="#" style={{textDecoration:"none"}}>MCX</a>
                    <a className='p-3' href="#" style={{textDecoration:"none"}}>Terms & Conditions</a>
                    <a className='p-3' href="#" style={{textDecoration:"none"}}>Policies & procedures </a>
                    <a className='p-3' href="#" style={{textDecoration:"none"}}>Privacy policy</a>
                    <a className='p-3' href="#" style={{textDecoration:"none"}}>Disclosure</a>
                    <a className='p-3' href="#" style={{textDecoration:"none"}}>For investor's attention</a>
                    <a className='p-3' href="#" style={{textDecoration:"none"}}>Investor charter</a>
                </div>
            </div>
        </div>   
     );
}

export default Footer;