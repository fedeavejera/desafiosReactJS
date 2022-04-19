import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

const CheckOut = () => {
    return(
        <>
        <Link to='./cart'style={{textDecoration: "none"}}><Button variant="contained" color="secondary">CheckOut</Button></Link>
        </>
    )
}

export default CheckOut;