import React from 'react';
import {makeStyles, Grid, Paper, Container, CssBaseline} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
       // marginTop: theme.spacing(4),
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        fontWeight:'bold',
        color:'#080808',
      },
      barraOne:{

      }
}));



function App() {
    
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.root}>
             <Grid container spacing={5}>
                <Grid item xs={12}>
                    <div className={classes.paper}>
                        <div className ="animate__animated animate__bounce animate__repeat-2">
                          <img className={classes.logo} src={require('./assets/logo.png')} alt='logo'/>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.paper}>
                         <hr  width='40%'  align="left" size='5' color="#FF0000"/>
                        MATEIAL DE CONSTRUCION
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.paper}>
                         <hr  width='40%'  align="right" size='5'color="#007AC0"/>
                        DIVISION TABLEROS DE MATERA
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.paper}>
                    <hr  width='20%'  align="center" size='5'color="#0D0D0D"/>
                        ACERO GALVANIZADO
                    </div>
                </Grid>
             </Grid>
         </div>
    </Container>
         
  );
}

export default App;
