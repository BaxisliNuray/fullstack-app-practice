import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

function Navbar() {
    return (
        <>
            <AppBar style={{ background: 'transparent', boxShadow: 'none' }} position="static">
                <Container style={{ padding: '10px 0px' }}>
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <img width={"5%"} src="https://cubics.technology/assets/img/tech-header.png" alt="" />
                        <Typography style={{ color: '#2d3f50', fontWeight: '900' }} variant="h2" component="div" sx={{ flexGrow: 1 }}>Cubic
                        </Typography>
                        <Typography style={{ color: 'black' }}>BMS</Typography>
                        <Typography style={{ color: 'black' }}>BMS</Typography>

                        <Button style={{ color: 'black' }} color="inherit">Login</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </>

    )
}

export default Navbar