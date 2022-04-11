import React from "react";
import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import roots from "../assets/root.svg";
import stopwatch from "../assets/stopwatch.svg";
import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";
import CallToAction from "./ui/CallToAction";

const CustomSoftware = () => {
  return (
    <Grid container direction='column'>
      {/* Main Summary Section -------------------------------- */}
      <Grid
        item
        container
        direction='row'
        justifyContent={{ xs: "center", md: "flex-start" }}
        sx={{ padding: { xs: "1em 1.5em 10em", sm: "2em 5em 10em 5em" } }}>
        <Grid item sx={{ margin: "0.7em 1em 0 -3.5em", display: { xs: "none", md: "initial" } }}>
          <IconButton disableRipple component={Link} to='/services'>
            <Box component='img' src={backArrow} alt='Back to services page arrow' />
          </IconButton>
        </Grid>
        <Grid
          item
          container
          direction='column'
          sx={{ maxWidth: "40em", textAlign: { xs: "center", md: "initial" } }}>
          <Grid item>
            <Typography variant='h2' paragraph>
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Whether we’re replacing old software or inventing new solutions, Arc Development is
              here to help your business tackle technology.{" "}
            </Typography>
            <Typography variant='body1' paragraph>
              Using regular commercial software leaves you with a lot of stuff you don’t need,
              without some of the stuff you do need, and ultimately controls the way you work.
              Without using any software at all you risk falling behind competitors and missing out
              on huge savings from increased efficiency.{" "}
            </Typography>
            <Typography variant='body1' paragraph>
              Our custom solutions are designed from the ground up with your needs, wants, and goals
              at the core. This collaborative process produces finely tuned software that is much
              more effective at improving your workflow and reducing costs than generalized options.
            </Typography>
            <Typography variant='body1' paragraph>
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ marginTop: "0.7rem", display: { xs: "none", md: "initial" } }}>
          <IconButton disableRipple component={Link} to='/mobileapps'>
            <Box component='img' src={forwardArrow} alt='Forward to mobile apps page arrow' />
          </IconButton>
        </Grid>
      </Grid>

      {/* Saving Section -------------------------------- */}
      <Grid
        item
        container
        direction='row'
        justifyContent='center'
        sx={{ marginTop: "15em", marginBottom: "20em", padding: { xs: "0 1.5em", sm: "0 5em" } }}>
        <Grid
          item
          container
          direction='column'
          md
          sx={{ maxWidth: { xs: "40em" }, alignItems: "center" }}>
          <Grid item>
            <Typography variant='h4'>Save Energy</Typography>
          </Grid>
          <Grid item>
            <Box component='img' src={lightbulb} alt='lightbulb' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          md
          sx={{
            maxWidth: { xs: "40em" },
            alignItems: "center",
            marginTop: { xs: "10em", md: 0 },
            marginBottom: { xs: "10em", md: 0 },
          }}>
          <Grid item>
            <Typography variant='h4'>Save Time</Typography>
          </Grid>
          <Grid item>
            <Box component='img' src={cash} alt='cash' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          md
          sx={{ maxWidth: { xs: "40em" }, alignItems: "center" }}>
          <Grid item>
            <Typography variant='h4'>Save Money</Typography>
          </Grid>
          <Grid item>
            <Box component='img' src={stopwatch} alt='stopwatch' />
          </Grid>
        </Grid>
      </Grid>

      {/* DDD and Scale Section -------------------------------- */}
      <Grid
        item
        container
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "initial" }}
        justifyContent='space-around'
        sx={{ padding: { xs: "0 1.5em", sm: "0 5em" } }}>
        {/* Documents & Data Section */}
        <Grid
          item
          container
          direction={{ xs: "column", sm: "row" }}
          md
          sx={{ marginBottom: { xs: "15em", md: 0 } }}>
          <Grid
            item
            container
            direction='column'
            sx={{
              "&.MuiGrid-item": { maxWidth: { xs: "40em" } },
              textAlign: { xs: "center", sm: "initial" },
            }}
            sm>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography variant='body1' paragraph>
                Billions are spent annually on the purchasing, printing, and distribution of paper.
                On top of the massive environmental impact this has, it causes harm to your bottom
                line as well.
              </Typography>
              <Typography variant='body1' paragraph>
                By utilizing digital forms and documents you can remove these obsolete expenses,
                accelerate your communication, and help the Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item sm container justifyContent={{ xs: "center", md: "initial" }}>
            <Lottie
              loop
              animationData={documentsAnimation}
              play
              style={{ maxHeight: "275px", maxWidth: "275px", minHeight: "250px" }}
            />
          </Grid>
        </Grid>
        {/* Scale Section */}
        <Grid item container direction={{ xs: "column", sm: "row" }} md textAlign='right'>
          <Grid item container sm justifyContent={{ xs: "center", md: "flex-end" }}>
            <Lottie
              loop
              animationData={scaleAnimation}
              play
              style={{ maxHeight: "260px", maxWidth: "280px" }}
            />
          </Grid>
          <Grid
            item
            container
            direction='column'
            sx={{
              "&.MuiGrid-item": { maxWidth: { xs: "40em" } },
              textAlign: { xs: "center", sm: "right" },
            }}
            sm>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Whether you’re a large brand, just getting started, or taking off right now, our
                application architecture ensures pain-free growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Root-Cause Analysis Section -------------------------------- */}
      <Grid
        item
        container
        direction='row'
        sx={{ marginTop: "20em", marginBottom: "20em", padding: { xs: "0 1.5em", sm: "0 5em" } }}>
        <Grid item container direction='column' alignItems='center'>
          <Grid item>
            <Box
              component='img'
              src={roots}
              alt='tree with roots extending out'
              sx={{ height: { xs: "300px", sm: "450px" }, width: { xs: "300px", sm: "450px" } }}
            />
          </Grid>
          <Grid item textAlign='center' sx={{ "&.MuiGrid-item": { maxWidth: { xs: "40em" } } }}>
            <Typography variant='h4' gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant='body1' paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant='body1' paragraph>
              We can help you thoroughly examine all areas of your business to develop a holistic
              plan for the most effective implementation of technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Auto and UX Section -------------------------------- */}
      <Grid
        item
        container
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "initial" }}
        justifyContent='space-around'
        sx={{ padding: { xs: "0 1.5em", sm: "0 5em" }, marginBottom: "20em" }}>
        {/* Automation Section */}
        <Grid item container md sx={{ marginBottom: { xs: "15em", md: 0 } }}>
          <Grid
            item
            container
            direction='column'
            sx={{ maxWidth: { xs: "40em" }, textAlign: { xs: "center", sm: "initial" } }}
            sm>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Why waste time when you don’t have to?
              </Typography>
              <Typography variant='body1' paragraph>
                We can help you identify processes with time or event based actions which can now
                easily be automated.
              </Typography>
              <Typography variant='body1' paragraph>
                Increasing efficiency increases profits, leaving you more time to focus on your
                business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container sm justifyContent={{ xs: "center", md: "initial" }}>
            <Lottie
              loop
              animationData={automationAnimation}
              play
              style={{ maxHeight: "290px", maxWidth: "280px" }}
            />
          </Grid>
        </Grid>
        {/* UX Design Section */}
        <Grid item container md textAlign='right'>
          <Grid item container sm justifyContent={{ xs: "center", md: "flex-end" }}>
            <Lottie
              loop
              animationData={uxAnimation}
              play
              style={{ maxHeight: "310px", maxWidth: "280px" }}
            />
          </Grid>
          <Grid
            item
            container
            direction='column'
            sx={{ maxWidth: { xs: "40em" }, textAlign: { xs: "center", sm: "right" } }}
            sm>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography variant='body1' paragraph>
                So why are so many pieces of software complicated, confusing, and frustrating?
              </Typography>
              <Typography variant='body1' paragraph>
                By prioritizing users and the real ways they interact with technology we’re able to
                develop unique, personable experiences that solve problems rather than create new
                ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Call To Action */}
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
