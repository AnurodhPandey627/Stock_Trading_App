import React from 'react';
import { Box, TextField, InputAdornment } from "@mui/material";

function Hero() {
    return ( 
        <div style={{backgroundColor:"#f6f6f6"}}>
            <div className='container'>
                <div className='row ps-5 pe-5 pt-4'>
                    <div className='col-6'>
                        <h1>Support Portal</h1>
                    </div>
                    <div className='col-6 text-end'>
                        <button className='btn btn-primary ps-3 pe-3' style={{fontSize:"1.1rem"}}>My Tickets</button>
                    </div>
                </div>
                <div className='row ps-5 pe-5 pt-4 pb-5'>
                    <Box>
                    <TextField
                        className='shadow-sm'
                        sx={{backgroundColor:"#fff" }}
                        fullWidth
                        placeholder="Eg: How do I open my account, How do I activate F&O..."
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                </InputAdornment>
                            )
                        }}
                    />
                    </Box>
                </div>
            </div>
        </div>
     );
}

export default Hero;