import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonArrow from "./ButtonArrow";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import { BackgroundImageStyles } from "../LandingPage";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const CallToAction = () => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid container sx={{ height: "60em", alignItems: "center" }}>
      <Grid
        item
        container
        sx={{ position: "absolute", alignItems: "center" }}
        direction={{ xs: "column", md: "row" }}>
        <Grid
          item
          sx={{ marginLeft: { xs: 0, md: "5em" }, textAlign: { xs: "center", md: "initial" } }}
          sm>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h2'>
                Simple Software. <br />
                Revolutionary Results.
              </Typography>
              <Typography variant='subtitle2' fontSize='1.5rem'>
                Take advantage of the 21st Century.
              </Typography>
              <Grid item container justifyContent={{ xs: "center", md: "initial" }}>
                <Button
                  component={Link}
                  to='/revolution'
                  variant='outlined'
                  sx={{
                    ...theme.typography.learnButton,
                    fontSize: "0.75rem",
                    height: "35px",
                    padding: "5px",
                    marginBottom: { xs: "2em", md: 0 },
                  }}>
                  <span style={{ marginRight: "5px" }}>Learn more</span>
                  <ButtonArrow width={10} height={10} fill={theme.palette.primary.main} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sm
          sx={{
            marginRight: { xs: 0, md: "5em" },
            marginLeft: { xs: 0, md: "2em" },
            textAlign: { xs: "center", md: "right" },
          }}>
          <Button
            component={Link}
            to='/estimate'
            variant='contained'
            sx={{
              ...theme.typography.estimate,
              borderRadius: "50px",
              height: "80px",
              width: "205px",
              backgroundColor: "secondary.main",
              fontSize: "1.5rem",
              "&:hover": {
                backgroundColor: "secondary.light",
              },
            }}>
            Free Estimate
          </Button>
        </Grid>
      </Grid>
      <Box
        sx={{
          ...BackgroundImageStyles(matchesMd ? mobileBackground : background),
          backgroundAttachment: { xs: "inherit", lg: "fixed" },
        }}
      />
    </Grid>
  );
};

export default CallToAction;
