import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Box, Button, Card, CardActions, CardContent, Container, Link} from "@material-ui/core";
import HeaderCustom from "../src/Header";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    small: {
        fontSize: 12,
    },
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

export default function Form() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
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
            <Typography align={"center"}><h1>Médailles</h1></Typography>

                <Grid container
                      justify="center"
                      alignItems="center" spacing={5}>
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <img width="100%" src="/medal.png" />
                                <Typography align={"center"} variant="body2" component="p">
                                    Avoir joué une partie
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <img width="100%" src="/medal.png" />
                                <Typography align={"center"} variant="body2" component="p">
                                    Faire 1000€ de bénéfices
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <img width="100%" src="/medal.png" />
                                <Typography align={"center"} variant="body2" component="p">
                                    Perdre tout son argent
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <img width="100%" src="/interrogation.png" />
                                <Typography align={"center"} variant="body2" component="p">

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <img width="100%" src="/interrogation.png" />
                                <Typography align={"center"} variant="body2" component="p">

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <img width="100%" src="/interrogation.png" />
                                <Typography align={"center"} variant="body2" component="p">

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
        </Container>
    )

    return (
        <div className={classes.grow} >
            <HeaderCustom/>
            {renderRegister}
        </div>

    );
}
