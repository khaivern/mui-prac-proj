import React from "react";
import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import integrationAnimation from "../animations/integrationAnimation/data.json";
import swissKnifeIcon from "../assets/swissKnife.svg";
import extendAccessIcon from "../assets/extendAccess.svg";
import engagementIcon from "../assets/increaseEngagement.svg";
import CallToAction from "./ui/CallToAction";

const MobileApp = () => {
  return (
    <Grid container direction='column'>
      {/* Main Summary Section -------------------------------- */}
      <Grid item container sx={{ padding: { xs: "1em 1.5em", md: "2em 5em" }, justifyContent: {xs: "center", md: "flex-start"} }}>
        <Grid item sx={{ margin: "0.7em 1em 0 -3.5em", display: { xs: "none", md: "initial" } }}>
          <IconButton disableRipple component={Link} to='/customsoftware'>
            <Box component='img' src={backArrow} alt='Back to Custom Services page' />
          </IconButton>
        </Grid>
        <Grid
          item
          container
          direction='column'
          sx={{ maxWidth: "40em", textAlign: { xs: "center", md: "initial" } }}>
          <Grid item>
            <Typography variant='h2' gutterBottom>
              iOS/Android App Development
            </Typography>
            <Typography variant='body1' paragraph>
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography variant='body1' paragraph>
              Whether you want an app for your customers, employees, or yourself, we can build
              cross-platform native solutions for any part of your business process. This opens you
              up to a whole new world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography variant='body1' paragraph>
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ marginTop: "0.7rem", display: { xs: "none", md: "initial" } }}>
          <IconButton disableRipple component={Link} to='/websites'>
            <Box component='img' src={forwardArrow} alt='Forward to Website Development page' />
          </IconButton>
        </Grid>
      </Grid>

      {/* Int & SPS section -------------------------------- */}
      <Grid
        item
        container
        direction={{ xs: "column", md: "row" }}
        sx={{ padding: { xs: "0 1.5em", md: "0 5em" }, margin: "15em 0" }}>
        <Grid item container direction='column' md textAlign={{xs: "center", md: "initial"}}>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Integration
            </Typography>
            <Typography variant='body1' paragraph>
              Our technology enables an innate interconnection between web and mobile applications,
              putting everything you need right in one convenient place.
            </Typography>
            <Typography variant='body1' paragraph>
              This allows you to extend your reach, reinvent interactions, and develop a stronger
              relationship with your users than ever before
            </Typography>
          </Grid>
        </Grid>
        <Grid item container md sx={{ justifyContent: "center" }}>
          <Lottie loop animationData={integrationAnimation} play style={{ maxWidth: "20em" }} />
        </Grid>
        <Grid item container direction='column' textAlign={{xs: "center", md: "right"}} md>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Simultaneous Platform Support
            </Typography>
            <Typography variant='body1' paragraph>
              Our cutting-edge development process allows us to create apps for iPhone, Android, and
              tablets — all at the same time.
            </Typography>
            <Typography variant='body1' paragraph>
              This significantly reduces costs and creates a more unified brand experience across
              all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Extend Section -------------------------------- */}
      <Grid
        item
        container
        direction={{ xs: "column", md: "row" }}
        sx={{ padding: { xs: "0 1.5em", md: "0 5em" }, marginBottom: "15em" }}>
        <Grid item container direction='column' md alignItems='center'>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <Box component='img' src={swissKnifeIcon} alt='Extend Functionality Icon' />
          </Grid>
        </Grid>
        <Grid item container direction='column' md alignItems='center' sx={{margin:{xs: "10em 0", md: 0}}}>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <Box
              component='img'
              src={extendAccessIcon}
              alt='Extend Access Icon'
              sx={{ maxWidth: {xs: "20em", md: "28em"} }}
            />
          </Grid>
        </Grid>
        <Grid item container direction='column' md alignItems='center'>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <Box component='img' src={engagementIcon} alt='Increase Engagement icon' />
          </Grid>
        </Grid>
      </Grid>

      {/* Call to Action Section -------------------------------- */}
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default MobileApp;
