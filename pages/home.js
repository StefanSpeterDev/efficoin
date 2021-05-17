import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListIcon from "@material-ui/icons/List";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Image from "next/image";
import Head from "next/head";
import { Box, Button, Container } from "@material-ui/core";
import styles from "../styles/Homepage.module.css";
import MenuCustom from "../src/Header";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {

  const classes = useStyles();

  const renderHeader = (
    <Container maxWidth="xl" className={styles.containerHeader}>
      <Container className={styles.WrapperGrid}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src="/header.png" />
            <div className={`${styles.WrapperPlayButton} ${styles.BtnSecondary}`}>
              <Button variant="contained" color="secondary">
                Jouer
              </Button>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className={styles.titleIntroduction}>
              Efficoin, <br />
              <span>le premier jeu de trading de cryptomonnaie.</span>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );

  return (
    <div className={classes.grow}>
      <MenuCustom />
      {renderHeader}
    </div>
  );
}
