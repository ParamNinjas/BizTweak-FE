import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import signin from '../Images/signin.png'
import Container from '@material-ui/core/Container';
import './Login.css'






const  Login=() =>{
return (
    <div className="login-container">
        <Container maxWidth="sm">
            <Grid container>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <div className="imagegrid">
                        <img
                            src={signin}
                            alt='signin'
                            className='signinIMG'
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}>
                    <div className="loginForm">
                        <Typography variant="h3">Login Account</Typography>
                        <TextField 
                                id="filled-basic"  
                                label="Email Address" 
                                variant="filled" 
                        />
                           <TextField 
                                id="filled-basic"  
                                label="Password" 
                                variant="filled" 
                        />
                    </div>
                </Grid>
            </Grid>    
    
        </Container>  

    </div>
)
}

export default Login