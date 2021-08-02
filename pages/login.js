import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import { Box, Button, Container } from "@material-ui/core";
import HeaderCustom from "../src/Header";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();

    const renderLogin = (
        <Container>
            <Grid container
                  direction="column"
                  justify="center"
                  alignItems="center" spacing={3}>
                <Grid item xs={12}>
                    <h1>Connexion</h1>
                </Grid>
                <Grid item xs={12}>
                    <FacebookLoginButton><span>Se connecter avec Facebook</span></FacebookLoginButton>
                </Grid>
                <Grid item xs={12}>
                    <GoogleLoginButton><span>Se connecter avec Google</span></GoogleLoginButton>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="standard-basic" label="Nom d'utilisateur" />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="standard-password-input"
                        label="Mot de passe"
                        type="password"
                        autoComplete="current-password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="secondary">
                        se connecter
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );

    return (
        <div className={classes.grow} >
            <HeaderCustom/>
            {renderLogin}
        </div>

    );
}
