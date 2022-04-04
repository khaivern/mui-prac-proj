import { styled } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  zIndex: theme.zIndex.drawer + 1,
  position: "relative",
}));

const FooterLinkStyles = {
  color: "white",
  fontFamily: "Arial",
  fontSize: "0.75rem",
  fontWeight: "bold",
  textDecoration: "none",
};

const IconStyles = {
  height: { xs: "2.5em", md: "3.5em", lg: "4em" },
  width: { xs: "2.5em", md: "3.5em", lg: "4em" },
};

const Footer = () => {
  return (
    <StyledFooter>
      <Grid
        container
        sx={{
          position: "absolute",
          justifyContent: "center",
          display: { xs: "none", lg: "flex" },
        }}>
        <Grid item sx={{ margin: "3em" }}>
          <Grid item container direction='column' spacing={2}>
            <Grid item sx={FooterLinkStyles} component={Link} to='/'>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ margin: "3em" }}>
          <Grid item container direction='column' spacing={2}>
            <Grid item sx={FooterLinkStyles} component={Link} to='/services'>
              Services
            </Grid>
            <Grid item sx={FooterLinkStyles} component={Link} to='/customsoftware'>
              Custom Software Development
            </Grid>
            <Grid item sx={FooterLinkStyles} component={Link} to='/mobileapps'>
              Mobile App Development
            </Grid>
            <Grid item sx={FooterLinkStyles} component={Link} to='/websites'>
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ margin: "3em" }}>
          <Grid item container direction='column' spacing={2}>
            <Grid item sx={FooterLinkStyles} component={Link} to='/revolution'>
              The Revolution
            </Grid>
            <Grid item sx={FooterLinkStyles} component={Link} to='/revolution'>
              Vision
            </Grid>
            <Grid item sx={FooterLinkStyles} component={Link} to='/revolution'>
              Technology
            </Grid>
            <Grid item sx={FooterLinkStyles} component={Link} to='/revolution'>
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ margin: "3em" }}>
          <Grid item container direction='column' spacing={2}>
            <Grid item sx={FooterLinkStyles} component={Link} to='/about'>
              About Us
            </Grid>
            <Grid item sx={FooterLinkStyles} component={Link} to='/about'>
              History
            </Grid>
            <Grid item sx={FooterLinkStyles} component={Link} to='/about'>
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ margin: "3em" }}>
          <Grid item container direction='column' spacing={2}>
            <Grid item sx={FooterLinkStyles} component={Link} to='/contact'>
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        component='img'
        alt='black decorative slash'
        src={footerAdornment}
        sx={{ verticalAlign: "bottom", width: { xs: "15em", md: "21em", lg: "25em" } }}
      />
      <Grid
        container
        spacing={2}
        sx={{
          position: "absolute",
          marginTop: "-6em",
          right: { xs: "0.6em", lg: "1.5em" },
          justifyContent: "flex-end",
        }}>
        <Grid
          item
          component='a'
          href='https://www.facebook.com'
          rel='noopener noreferrer'
          target='_blank'>
          <Box component='img' src={facebook} alt='Facebook icon' sx={IconStyles} />
        </Grid>
        <Grid
          item
          component='a'
          href='https://www.twitter.com'
          rel='noopener noreferrer'
          target='_blank'>
          <Box component='img' src={twitter} alt='Twitter icon' sx={IconStyles} />
        </Grid>
        <Grid
          item
          component='a'
          href='https://www.instagram.com'
          rel='noopener noreferrer'
          target='_blank'>
          <Box component='img' src={instagram} alt='Instagram icon' sx={IconStyles} />
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
