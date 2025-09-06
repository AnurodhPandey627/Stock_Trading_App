import React from 'react';

function Awards() {
    return (  
       <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='largest broker'/>
                </div>
                <div className='col-6 p-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-3 mt-3'>2+ Million Zerodha Clients contribute to over 15% of all the volumes in India daily 
                        by trading and investing in:
                    </p>
                    <ul className='row'>
                        <div className='col-6'>
                            <li><p>Features and Options</p></li>
                            <li><p>Commodity derivatives</p></li>
                            <li><p>Currency derivatives</p></li>
                        </div>
                        <div className='col-6'>
                            <li><p>Stocks and IPOs</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Government Securities</p></li>
                        </div>
                    </ul>
                    <img  style={{width:"100%"}} src='media/images/pressLogos.png' alt='press logos'/>
                </div>
            </div>
       </div>
    );
}

export default Awards;