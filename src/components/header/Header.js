import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import hero from '../../assets/hero-bg.png'
import './Header.css'


const Header=() => {
return(
    <div className="Home-con">
        <Container>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="hometext">
                            <h1>Take our <span>Free</span> Business  Assessment.</h1>
                            <h3>learn how to improve revenue in your business.</h3>
                            </div>
                            <div className="homepara">
                        <p>
                        BizTweak aims to help make entrepreneurship easier,
                        by helping you spot gaps in your business or business idea.
                        </p>
                        <Button
                            className="BtnTake"
                            variant="outlined"
                            >Take Free Assessment</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="homeimg">
                    <img
                            src={hero}
                            alt='hero'
                            className='heroIMG'
                        />
                    </div>
                </Grid>
            </Grid>
        </Container>
    </div>
)
}

export default Header