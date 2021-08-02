import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import {Box, Button, Container, Link} from "@material-ui/core";
import HeaderCustom from "../src/Header";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    small: {
        fontSize: 12,
    }
}));

export default function Form() {
    const classes = useStyles();
    const registerUser = async event => {
        event.preventDefault()

        const res = await fetch(
            'http://localhost:3000/api/users/register.js',
            {
                body: JSON.stringify({
                    name: event.target.name.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

        const result = await res.json()
        // result.user => 'Ada Lovelace'
    }

    const renderRegister = (
        <Container>
            <form onSubmit={registerUser}>
                <Grid container
                      direction="column"
                      justify="center"
                      alignItems="center" spacing={3}>
                    <Grid item xs={12}>
                        <h1>S'enregistrer</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <FacebookLoginButton><span>Se connecter avec Facebook</span></FacebookLoginButton>
                    </Grid>
                    <Grid item xs={12}>
                        <GoogleLoginButton><span>Se connecter avec Google</span></GoogleLoginButton>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Prénom" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Nom" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Mail" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" type="password" label="Mot de passe" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" type="password" label="comfirmer mot de passe" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container
                              alignItems="center">
                            <Grid item xs={2}>
                                <AccountCircleIcon fontSize={"large"} t></AccountCircleIcon>
                            </Grid>
                            <Grid item xs={10}>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary">
                            comfirmer
                        </Button>
                    </Grid>
                    <Grid item xs={12} >
                        <Link href="#">
                            <Box color="info.main">Vous avez déjà un compte? Se connecter</Box>
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </Container>
    )

    return (
        <div className={classes.grow} >
            <HeaderCustom/>
            {renderRegister}
        </div>

    );
}
