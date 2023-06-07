import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import { Container, Typography } from '@mui/material';

function Navbar() {
    return (
        <>

            <AppBar style={{ backgroundColor: 'transparent', boxShadow: 'none', padding: '10px 0px' }} position="static">
                <Container>
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

                        <Link style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img style={{ width: '10%' }} src="	https://cubics.technology/assets/img/tech-header.png" alt="" />
                            <Typography style={{ fontWeight: '900', fontSize: '40px', color: '#2d3f50' }}>Cubics</Typography>
                        </Link>

                        <p style={{ padding: '0px 40px' }} >
                            <Link style={{ fontFamily: 'unset', color: '#2d3f50', padding: '0px 20px', textDecoration: 'none', fontWeight: '100', fontSize: '30px' }}>BMS</Link>
                            <Link style={{ fontFamily: 'unset', color: '#2d3f50', padding: '0px 20px', textDecoration: 'none', fontWeight: '100', fontSize: '30px' }}>Brands</Link>
                            <Link style={{ fontFamily: 'unset', color: '#2d3f50', padding: '0px 20px', textDecoration: 'none', fontWeight: '100', fontSize: '30px' }}>POS</Link>
                        </p>


                        <p style={{ padding: '0px 40px' }} >
                            <Link style={{ fontFamily: 'unset', color: '#2d3f50', padding: '0px 20px', textDecoration: 'none', fontWeight: '100', fontSize: '30px' }}>Cubics</Link>
                            <Link style={{ fontFamily: 'unset', color: '#2d3f50', padding: '0px 20px', textDecoration: 'none', fontWeight: '100', fontSize: '30px' }}>Elaqe</Link>
                            <Link style={{ fontFamily: 'unset', color: '#2d3f50', padding: '0px 20px', textDecoration: 'none', fontWeight: '100', fontSize: '30px' }}>Bloq</Link>
                            <Button style={{display:'flex',}}>Az</Button>
                        </p>
                    </Toolbar>
                </Container>
            </AppBar>




        </>

    )
}

export default Navbar