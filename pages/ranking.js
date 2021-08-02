import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import {
    IconFlagFR,
    IconFlagCA,
    IconFlagEU
} from 'material-ui-flags';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Link,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead, TableRow
} from "@material-ui/core";
import HeaderCustom from "../src/Header";
import Typography from "@material-ui/core/Typography";
import SearchBar from "material-ui-search-bar";

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
            <Typography align={"center"}><h1>Classement</h1></Typography>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <SearchBar placeholder={"Rechercher..."}/>
                </Grid>
                <Grid item xs={8}>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell><Avatar alt="Remy Sharp" src="1.jpg" /></TableCell>
                                    <TableCell>Toto</TableCell>
                                    <TableCell><Box color="green">+56%</Box></TableCell>
                                    <TableCell><IconButton><IconFlagFR /></IconButton>France</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2</TableCell>
                                    <TableCell><Avatar alt="Remy Sharp" src="2.jpg" /></TableCell>
                                    <TableCell>Askayo</TableCell>
                                    <TableCell><Box color="green">+48%</Box></TableCell>
                                    <TableCell><IconButton><IconFlagFR /></IconButton>France</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3</TableCell>
                                    <TableCell><Avatar alt="Remy Sharp" src="3.jpg" /></TableCell>
                                    <TableCell>Stefan</TableCell>
                                    <TableCell><Box color="green">+32%</Box></TableCell>
                                    <TableCell><IconButton><IconFlagFR /></IconButton>France</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>4</TableCell>
                                    <TableCell><Avatar alt="Remy Sharp" src="4.jpg" /></TableCell>
                                    <TableCell>Nico</TableCell>
                                    <TableCell><Box color="green">+25%</Box></TableCell>
                                    <TableCell><IconButton><IconFlagCA /></IconButton>Canada</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>5</TableCell>
                                    <TableCell><Avatar alt="Remy Sharp" src="5.jpg" /></TableCell>
                                    <TableCell>William</TableCell>
                                    <TableCell><Box color="green">+24%</Box></TableCell>
                                    <TableCell><IconButton><IconFlagEU /></IconButton>Europe</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={4}>
                    <img width="150%" src="/podium.JPG" />
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
