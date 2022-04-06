import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import ButtonArrow from "./ui/ButtonArrow";

const Services = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction='column'>
      <Grid item sx={{ marginLeft: { xs: 0, md: "5em" }, marginTop: { xs: "1em", sm: "2em" } }}>
        <Typography variant='h2' gutterBottom sx={{ textAlign: { xs: "center", md: "initial" } }}>
          Services
        </Typography>
      </Grid>
      {/* iOS/Android Block-------------------------------------------- */}
      <Grid item>
        <Grid
          item
          container
          direction='row'
          sx={{ marginTop: { xs: "1em", md: "5em" }, padding: { xs: "25px", md: 0 } }}
          justifyContent={{ xs: "center", md: "flex-end" }}>
          <Grid
            item
            sx={{
              textAlign: { xs: "center", md: "initial" },
              width: { xs: "initial", md: "35em" },
              marginLeft: {xs: 0, sm: "2rem"}
            }}>
            <Typography variant='h4'>iOS/Android App Development</Typography>
            <Typography variant='subtitle1' sx={{ marginBottom: "1rem" }}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to='/mobileapps'
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
          <Grid item sx={{ marginRight: { xs: 0, md: "5em" } }}>
            <Box
              component='img'
              src={mobileAppsIcon}
              alt='Mobile Phone Icon'
              marginLeft={{ xs: 0, sm: "2em" }}
              sx={{ width: "250px" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          item
          container
          direction='row'
          sx={{ marginTop: "10em", padding: { xs: "25px", md: 0 } }}
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
              component={Link}
              to='/customsoftware'
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

      {/* Websites Block-------------------------------------------- */}
      <Grid item sx={{ marginBottom: { xs: "10em" } }}>
        <Grid
          item
          container
          direction='row'
          sx={{ marginTop: "10em", padding: { xs: "25px", md: 0 } }}
          justifyContent={{ xs: "center", md: "flex-end" }}>
          <Grid
            item
            sx={{
              textAlign: { xs: "center", md: "initial" },
              width: { xs: "initial", md: "35em" },
              marginLeft: {xs: 0, sm: "2rem"}
            }}>
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1' sx={{ marginBottom: "1rem" }}>
              Reach More. Discover More. Sell more.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to='/websites'
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
          <Grid item sx={{ marginRight: { xs: 0, md: "5em" } }}>
            <Box
              component='img'
              src={websitesIcon}
              alt='Websites Icon'
              marginLeft={{ xs: 0, sm: "2em" }}
              sx={{ width: "250px" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
