import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button, Container } from "@material-ui/core";
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
        <Grid container spacing={2} className={styles.columnMobile}>
          <Grid item xs={12} md={4}>
            <img src="/header.png" />
            <div
              className={`${styles.WrapperPlayButton} ${styles.BtnSecondary}`}
            >
              <Button variant="contained" color="secondary">
                Jouer
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className={styles.titleIntroduction}>
              Efficoin, <br />
              <span>le premier jeu de trading de cryptomonnaie.</span>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
  const firstContent = (
    <Container maxWidth="xl" className={styles.containerHeader}>
      <Container className={styles.WrapperGrid}>
        <Grid container spacing={2} className={styles.columnMobile}>
          <Grid item xs={12} md={8}>
            <div className={styles.textLeft}>
              <h3>Apprendre le trading,</h3>
              <span>
                Non il ne s'agit pas de faire de l'argent facilement, ni même
                d'investir de manière aléatoire, le trading est un vrai métier
                qui nécessite un savoir faire avant de se plonger dedans.
                <br />
                Dans ce tuto vous allez prendre comment faire ses premiers
                achats/ventes et comment gérer le risque.
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src="/tradegif.gif" />
            <div
              className={`${styles.WrapperPlayButton} ${styles.BtnSecondary}`}
            >
              <Button variant="contained" color="secondary">
                Apprendre
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
  const secondContent = (
    <Container maxWidth="xl" className={styles.containerHeader}>
      <Container className={styles.WrapperGrid}>
        <Grid container spacing={2} className={styles.columnMobile}>
          <Grid item xs={12} md={4}>
            <img src="/opti.jpg" />
            <div
              className={`${styles.WrapperPlayButton} ${styles.BtnSecondary}`}
            >
              <Button variant="contained" color="secondary">
                S'optimiser
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={8} className={styles.flexRight}>
            <div className={styles.textRight}>
              <h3>Optimiser ses gains,</h3>
              <span>
                Une fois le principe même du trading acquis, on peut se demander
                relativement vite comment faire pour faire plus de gains mais de
                manières plus intelligentes, en diminuant les risques pris et
                donc les gains possibles mais tout en faisant des gains plus
                constants.
              </span>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
  const thirdContent = (
    <Container maxWidth="xl" className={styles.containerHeader}>
      <Container className={styles.WrapperGrid}>
        <Grid container spacing={2} className={styles.columnMobile}>
          <Grid item xs={12} md={8}>
            <div className={styles.textLeft}>
              <h3>L'analyse technique, </h3>
              <span>
                Maintenant que les bases sont posées, que vous savez quel est
                votre plant, votre objectif, il est désormais temps de plonger
                dans l'analyse technique.
                <br />
                Ces outils permettent non pas de lire l'avenir, mais d'analyser
                et d'essayer de comprendre ce qui ce passe ou va potentiellement
                se passer et pourquoi cela arrive (ou non).
                <br />
                C'est un outil qui vient en complément d'une analyse
                fondamentale ou non et qui surtout permet d'analyser par rapport
                au passé, ce qui pourrait arriver dans le futur.
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src="/technical.gif" />
            <div
              className={`${styles.WrapperPlayButton} ${styles.BtnSecondary}`}
            >
              <Button variant="contained" color="secondary">
                Découvrir
              </Button>
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
      {firstContent}
      {secondContent}
      {thirdContent}
    </div>
  );
}
