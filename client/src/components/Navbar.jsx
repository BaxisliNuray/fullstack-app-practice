import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>

            <AppBar style={{ background: 'transparent', boxShadow: 'none' }} position="static">
                <Container>
                    <Toolbar style={{ height: '9vh'}}>

                        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',textDecoration:'none' }}>
                          <Link>
                          <Typography style={{ display: 'flex', alignItems: 'center' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <img style={{ width: '6%' }} src="https://cubics.technology/assets/img/tech-header.png" alt="" />
                                <span style={{ color: '#2d3f50', fontSize: '40px', fontWeight: '900', fontFamily: 'sans-serif' }}>Cubics</span>
                            </Typography>
                          </Link>
                            <Toolbar>
                                <Button style={{ padding: '0% 30% ' }}><Link style={{ color: '#2d3f50', fontSize: '25px' }}>BMS</Link></Button>
                                <Button style={{ padding: '0% 30% ' }}> <Link style={{ color: '#2d3f50', fontSize: '25px' }}> Brands</Link></Button>
                                <Button style={{ padding: '0% 30% ' }}><Link style={{ color: '#2d3f50', fontSize: '25px' }}> POS</Link></Button>

                            </Toolbar>



                        </Toolbar>




                    </Toolbar>
                </Container>


            </AppBar>





        </>

    )
}

export default Navbar