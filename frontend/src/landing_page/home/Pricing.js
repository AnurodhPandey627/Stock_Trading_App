import React from 'react';

function Pricing() {
    return (  
        <>
            <div className='container'>
                <div className='row p-5'>
                    <div className='col-6 p-5'>
                        <h3 className='mb-4'>Unbeatable Pricing</h3>
                        <p className='mb-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <a style={{textDecoration:"none"}} href='#'>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-4'><img src="media/images/pricing0.svg"></img><p className='text-muted'>Free account opening</p></div>
                            <div className='col-4'><img src="media/images/pricingEquity.svg"></img><p className='text-muted'>Free equity delivery and direct mutual funds</p></div>
                            <div className='col-4'><img src="media/images/intradayTrades.svg"></img><p className='text-muted'>Intraday and F&O</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;