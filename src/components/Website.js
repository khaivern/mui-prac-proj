import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import analyticsIcon from "../assets/analytics.svg";
import ecommerceIcon from "../assets/ecommerce.svg";
import outreachIcon from "../assets/outreach.svg";
import seoIcon from "../assets/seo.svg";
import CallToAction from "./ui/CallToAction";

const Website = () => {
  return (
    <Grid container direction='column'>
      {/* Main Summary Section------------------------------------------------ */}
      <Grid
        item
        container
        sx={{
          padding: { xs: "1em 1.5em", md: "2em 5em" },
          justifyContent: { xs: "center", md: "flex-start" },
        }}>
        <Grid sx={{ margin: "0.7em 1em 0 -3.5em", display: { xs: "none", md: "initial" } }}>
          <IconButton disableRipple component={Link} to='/mobileapps'>
            <Box component='img' src={backArrow} alt='Back to mobile apps page' />
          </IconButton>
        </Grid>
        <Grid
          item
          container
          direction='column'
          sx={{ maxWidth: "40em", textAlign: { xs: "center", md: "initial" } }}>
          <Grid item>
            <Typography variant='h2' gutterBottom>
              Website Development
            </Typography>
            <Typography variant='body1' paragraph>
              Having a website is a necessity in today’s business world. They give you one central,
              public location to let people know who you are, what you do, and why you’re the best
              at it.
            </Typography>
            <Typography variant='body1' paragraph>
              From simply having your hours posted to having a full fledged online store, making
              yourself as accessible as possible to users online drives growth and enables you to
              reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ marginTop: "0.7rem", display: { xs: "none", md: "initial" } }}>
          <IconButton disableRipple component={Link} to='/services'>
            <Box component='img' src={forwardArrow} alt='Forward to services page' />
          </IconButton>
        </Grid>
      </Grid>

      {/* Analytics Section -------------------------------- */}
      <Grid
        item
        container
        direction={{ xs: "column", md: "row" }}
        sx={{ padding: { xs: "0 1.5em", md: "0 2em 0 5em",lg: "0 5em" }, alignItems: "center", marginTop: "10em" }}>
        <Grid item>
          <Grid item container direction='column' alignItems={{xs: "center", md: "initial"}}>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item sx={{ marginLeft: "-2.75em" }}>
              <Box component='img' src={analyticsIcon} alt='Analytics Icon' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ "&.MuiGrid-root.MuiGrid-item":{ maxWidth: {xs:"30em"}}, textAlign: {xs: "center", md: "initial"} }}>
          <Typography variant='subtitle1' paragraph>
            Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden
            patterns and trends in your business, empowering you to make smarter decisions with
            measurable effects.
          </Typography>
        </Grid>
      </Grid>

      {/* Ecommerce Section------------------------------------------------ */}
      <Grid
        item
        container
        direction={{ xs: "column", md: "row" }}
        justifyContent='flex-end'
        alignItems='center'
        sx={{ padding: { xs: "0 1.5em", md: "0 2.5em", lg: "0 5em" }, margin: "15em 0" }}>
        <Grid item>
          <Grid item container direction='column' textAlign='center'>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <Box component='img' src={ecommerceIcon} alt='Ecommerce Icon' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ "&.MuiGrid-item":{ maxWidth:{xs: "30em"}}, marginLeft: {xs: 0, md: "1em"}, textAlign: {xs: "center", md: "initial"} }}>
          <Typography variant='subtitle1' paragraph>
            It’s no secret that people like to shop online.
          </Typography>
          <Typography variant='subtitle1' paragraph>
            In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that
            pie.
          </Typography>
        </Grid>
      </Grid>

      {/* Outreach Section -------------------------------- */}
      <Grid
        item
        container
        direction={{ xs: "column", md: "row" }}
        sx={{ padding: { xs: "0 1.5em", sm: "0 2.5em", md: "0 5em" }, alignItems: "center" }}>
        <Grid item>
          <Grid item container direction='column' alignItems={{xs: "center", md: "initial"}}>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <Box component='img' src={outreachIcon} alt='Outreach Icon' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ "&.MuiGrid-item":{ maxWidth: {xs:"30em"}}, marginLeft: {xs: 0, md: "1em"},textAlign: {xs: "center", md: "initial"} }}>
          <Typography variant='subtitle1' paragraph>
            Draw people in with a dazzling website. Showing off your products online is a great way
            to help customers decide what’s right for them before visiting in person
          </Typography>
        </Grid>
      </Grid>

      {/* SEO Section------------------------------------------------ */}
      <Grid
        item
        container
        direction={{ xs: "column", md: "row" }}
        justifyContent='flex-end'
        alignItems='center'
        sx={{ padding: { xs: "0 1.5em", md: "0 2.5em", lg: "0 5em" }, margin: "15em 0" }}>
        <Grid item>
          <Grid item container direction='column' textAlign='center'>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                E-Search Engine <br />
                Optimization
              </Typography>
            </Grid>
            <Grid item>
              <Box component='img' src={seoIcon} alt='SEO Icon' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ "&.MuiGrid-item":{ maxWidth: {xs: "30em"}}, marginLeft: {xs:0, md:"1em"},textAlign: {xs: "center", md: "initial"} }}>
          <Typography variant='subtitle1' paragraph>
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography variant='subtitle1' paragraph>If you’re like us, probably never.</Typography>
          <Typography variant='subtitle1' paragraph>
            Customers don’t go there either, so we make sure your website is designed to end up on
            top.
          </Typography>
        </Grid>
      </Grid>

      {/* CallToAction Section -------------------------------- */}
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default Website;
