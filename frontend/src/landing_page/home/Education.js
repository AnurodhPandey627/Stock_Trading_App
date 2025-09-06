import React from 'react';

function Education() {
    return (  
        <>
            <div className='container'>
                <div className='row p-5'>
                    <div className='col-6'>
                        <img src="media/images/index-education.svg" alt='varsity'></img>
                    </div>
                    <div className='col-6 p-5'>
                        <h3 className='mb-4'>Free and open market education</h3>
                        <div className='mb-4'>
                            <p className='mb-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                            <a style={{textDecoration:"none"}} href='#'>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div>
                            <p className='mb-4'>TradingQ&A, the most active trading and investment community in <br></br>India for all your market related queries.</p>
                            <a style={{textDecoration:"none"}} href='#'>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;