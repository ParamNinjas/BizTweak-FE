import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import hero from '../Images/hero-bg.png'
import Nav from "../components/Nav/Nav";
import './Home.css'


const Home=() => {
return(
    <div className="Home-con">
        <Nav/>
        <Container>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="hometext">
                        <h1>
                        Take a FREE. BizTweak Assessment.
                        </h1>
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

export default Home