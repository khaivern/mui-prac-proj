import React from "react";
import Lottie from "react-lottie-player";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import ButtonArrow from "./ui/ButtonArrow";
import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import { useMediaQuery } from "@mui/material";

const StyledLottie = styled(Lottie)({
  width: "100%",
  height: "100%",
});

const MainContainerStyles = {
  marginTop: {
    xs: "2em",
    md: "3em",
    lg: "5em",
  },
};

const LandingPage = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container direction='column' sx={MainContainerStyles}>
      {/* Hero Block------------------------------------------------ */}
      <Grid item>
        <Grid item container justifyContent='flex-end' alignItems='center'>
          <Grid item sm sx={{ minWidth: "21.5em", marginLeft: { xs: 0, sm: "1em" } }}>
            <Typography variant='h2' textAlign='center'>
              Bringing West Coast Technology <br />
              to the Midwest
            </Typography>
            <Grid item container justifyContent='center' marginTop='1em'>
              <Grid item>
                <Button
                  variant='contained'
                  sx={(theme) => ({
                    ...theme.typography.estimate,
                    borderRadius: 50,
                    backgroundColor: theme.palette.secondary.main,
                    marginRight: "40px",
                    height: "45px",
                    width: "145px",
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.light,
                    },
                  })}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='outlined'
                  sx={(theme) => ({
                    ...theme.typography.learnButton,
                    fontSize: "0.9rem",
                    height: "45px",
                    width: "145px",
                  })}>
                  <span style={{ marginRight: "10px" }}>Learn more</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.primary.main} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sm
            sx={{
              maxWidth: { xs: "30em", lg: "50em" },
              minWidth: "21em",
              marginTop: "2em",
              marginLeft: "10%",
            }}>
            <StyledLottie loop animationData={animationData} play />
          </Grid>
        </Grid>
      </Grid>
      {/* Custom Software Block-------------------------------------------- */}
      <Grid item>
        <Grid
          item
          container
          direction='row'
          sx={{ marginTop: "12em", padding: { xs: "25px", md: 0 } }}
          justifyContent={{ xs: "center", md: "initial" }}>
          <Grid
            item
            sx={{ marginLeft: { xs: 0, md: "5em" }, textAlign: { xs: "center", md: "initial" } }}>
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1' sx={{ marginBottom: "1rem" }}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to{" "}
              <span style={{ fontFamily: "Pacifico", color: theme.palette.secondary.main }}>
                celebration
              </span>
              .
            </Typography>
            <Button
              variant='outlined'
              sx={{
                ...theme.typography.learnButton,
                fontSize: "0.75rem",
                height: "35px",
                padding: "5px",
                marginBottom: { xs: "2em", md: 0 },
              }}>
              <span style={{ marginRight: "10px" }}>Learn more</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.primary.main} />
            </Button>
          </Grid>
          <Grid item>
            <Box
              component='img'
              src={customSoftwareIcon}
              alt='Custom Software Icon'
              marginLeft={{ xs: 0, sm: "2em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* iOS/Android Block-------------------------------------------- */}
      <Grid item sx={{ marginRight: { xs: 0, md: "5em" } }}>
        <Grid
          item
          container
          direction='row'
          sx={{ marginTop: "12em", padding: { xs: "25px", md: 0 } }}
          justifyContent={{ xs: "center", md: "flex-end" }}>
          <Grid item sx={{ textAlign: { xs: "center", md: "initial" } }}>
            <Typography variant='h4'>iOS/Android App Development</Typography>
            <Typography variant='subtitle1' sx={{ marginBottom: "1rem" }}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button
              variant='outlined'
              sx={{
                ...theme.typography.learnButton,
                fontSize: "0.75rem",
                height: "35px",
                padding: "5px",
                marginBottom: { xs: "2em", md: 0 },
              }}>
              <span style={{ marginRight: "10px" }}>Learn more</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.primary.main} />
            </Button>
          </Grid>
          <Grid item>
            <Box
              component='img'
              src={mobileAppsIcon}
              alt='Mobile Phone Icon'
              marginLeft={{ xs: 0, sm: "2em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Websites Block-------------------------------------------- */}
      <Grid item>
        <Grid
          item
          container
          direction='row'
          sx={{ marginTop: "12em", padding: { xs: "25px", md: 0 } }}
          justifyContent={{ xs: "center", md: "initial" }}>
          <Grid
            item
            sx={{ marginLeft: { xs: 0, md: "5em" }, textAlign: { xs: "center", md: "initial" } }}>
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1' sx={{ marginBottom: "1rem" }}>
              Reach More. Discover More. Sell more.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              variant='outlined'
              sx={{
                ...theme.typography.learnButton,
                fontSize: "0.75rem",
                height: "35px",
                padding: "5px",
                marginBottom: { xs: "2em", md: 0 },
              }}>
              <span style={{ marginRight: "10px" }}>Learn more</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.primary.main} />
            </Button>
          </Grid>
          <Grid item>
            <Box
              component='img'
              src={websitesIcon}
              alt='Websites Icon'
              marginLeft={{ xs: 0, sm: "2em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* The Revolution Block------------------------------------------------ */}
      <Grid item>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          sx={{ height: "100em", marginTop: "12em" }}>
          <Card
            sx={{
              position: "absolute",
              boxShadow: theme.shadows[10],
              borderRadius: { xs: 0, lg: "15px" },
              padding: { xs: "8em 0", lg: "10em" },
              width: { xs: "100%", lg: "initial" },
            }}>
            <CardContent>
              <Grid container direction='column' textAlign='center'>
                <Grid item>
                  <Typography variant='h3' gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    Visionary insights coupled with cutting-edge technology is a recipe for
                    revolution.
                  </Typography>
                  <Button
                    variant='outlined'
                    sx={(theme) => ({
                      ...theme.typography.learnButton,
                      fontSize: "0.9rem",
                      height: "45px",
                      width: "145px",
                    })}>
                    <span style={{ marginRight: "10px" }}>Learn more</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.primary.main} />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {/* Background for the card to sit on */}
          <Box
            sx={{
              backgroundImage: `url(${revolutionBackground})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
      {/* Information Block------------------------------------------------ */}
      <Grid item>
        <Grid container direction='row' sx={{ height: "80em", alignItems: "center" }} >
          <Grid item container sx={{ position: "absolute" }} direction={{xs: "column", sm: "row"}} spacing={{xs: 10, sm: 0}} >
            <Grid item sx={{ marginLeft: {xs: 0, sm:"2em", md:"5em"}, textAlign: {xs: "center", sm: "initial"} }} sm>
              <Grid container direction='column' >
                <Typography variant='h2' sx={{ color: "#fff" }}>
                  About Us
                </Typography>
                <Typography variant='subtitle2'>Let’s get personal.</Typography>
                <Grid item>
                  <Button
                    variant='outlined'
                    sx={{
                      ...theme.typography.learnButton,
                      fontSize: "0.75rem",
                      height: "35px",
                      padding: "5px",
                      marginBottom: { xs: "2em", md: 0 },
                      color: "#fff",
                      borderColor: "#fff",
                    }}>
                    <span style={{ marginRight: "10px" }}>Learn more</span>
                    <ButtonArrow width={10} height={10} fill='#fff' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ marginRight: {xs:0, sm: "2em", md:"5em"}, textAlign: {xs:"center", sm:"right"} }} sm>
              <Grid container direction='column'>
                <Typography variant='h2' sx={{ color: "#fff" }}>
                  Contact Us
                </Typography>
                <Typography variant='subtitle2'>
                  Say hello!{" "}
                  <span role='img' aria-label='waving hand'>
                    👋🏻
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    variant='outlined'
                    sx={{
                      ...theme.typography.learnButton,
                      fontSize: "0.75rem",
                      height: "35px",
                      padding: "5px",
                      marginBottom: { xs: "2em", md: 0 },
                      color: "#fff",
                      borderColor: "#fff",
                    }}>
                    <span style={{ marginRight: "10px" }}>Learn more</span>
                    <ButtonArrow width={10} height={10} fill='#fff' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Box
            sx={{
              backgroundImage: `url(${infoBackground})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
