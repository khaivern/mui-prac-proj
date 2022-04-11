import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

import history from "../assets/history.svg";
import profile from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";
import CallToAction from "./ui/CallToAction"

const AboutUsStyles = {
  fontStyle: "italic",
  fontWeight: 300,
  fontSize: "1.5rem",
  maxWidth: "50em",
  lineHeight: 1.4,
};

const GridItemStyles = {
  padding: { xs: "0 1.5em", sm: "0 5em" },
};

const TeamSummaryStyles = {
  "&.MuiGrid-item": {
    maxWidth: "40em",
    padding: "1.25em",
  },
};

const AvatarStyles = {
  height: { xs: "20em", lg: "25em" },
  width: { xs: "20em", lg: "25em" },
  maxHeight: { xs: 200, sm: 300, lg: 400 },
  maxWidth: { xs: 200, sm: 300, lg: 400 },
};

const About = () => {
  return (
    <Grid container direction='column'>
      {/* Title */}
      <Grid
        item
        sx={{
          padding: { xs: "1em 1.5em 1em", sm: "2em 5em 2em 5em" },
          textAlign: { xs: "center", lg: "initial" },
        }}>
        <Typography variant='h2' gutterBottom>
          About Us
        </Typography>
      </Grid>
      {/* About Summary */}
      <Grid item container justifyContent='center' textAlign='center' sx={GridItemStyles}>
        <Typography variant='h4' paragraph sx={AboutUsStyles}>
          Whether it be person to person, business to consumer, or an individual to their interests,
          technology is meant to bring us closer to what we care about in the best way possible. Arc
          Development will use that principle to provide fast, modern, inexpensive, and aesthetic
          software to the Midwest and beyond.
        </Typography>
      </Grid>
      {/* History Section */}
      <Grid
        item
        container
        direction={{ xs: "column", lg: "row" }}
        alignItems={{ xs: "center", lg: "initial" }}
        sx={{ ...GridItemStyles, margin: "10em 0" }}
        justifyContent='space-around'>
        <Grid item>
          <Grid item container direction='column' textAlign={{ xs: "center", lg: "initial" }} lg>
            <Grid item sx={{ "&.MuiGrid-item": { maxWidth: "35em" } }}>
              <Typography variant='h4' gutterBottom>
                History
              </Typography>
            </Grid>
            <Grid item sx={{ "&.MuiGrid-item": { xs: { maxWidth: "35em" } } }}>
              <Typography variant='body1' paragraph sx={{ fontWeight: 700, fontStyle: "italic" }}>
                We’re the new kid on the block.
              </Typography>
              <Typography variant='body1' paragraph>
                Founded in 2019, we’re ready to get our hands on the world’s business problems.
              </Typography>
              <Typography variant='body1' paragraph>
                It all started with one question: Why aren’t all businesses using available
                technology? There are many different answers to that question: economic barriers,
                social barriers, educational barriers, and sometimes institutional barriers.
              </Typography>
              <Typography variant='body1' paragraph>
                We aim to be a powerful force in overcoming these obstacles. Recent developments in
                software engineering and computing power, compounded by the proliferation of smart
                phones, has opened up infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and completely new methods
                of interaction are created daily. Taking full advantage of these advancements is the
                name of the game.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justifyContent='center' lg>
            <Box
              component='img'
              src={history}
              alt='History Image'
              sx={{ maxHeight: { xs: 175, sm: 250, lg: "22em" } }}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Team Section */}
      <Grid
        item
        container
        direction='column'
        textAlign='center'
        alignItems='center'
        sx={GridItemStyles}>
        {/* Bio */}
        <Grid item>
          <Typography variant='h4' gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' paragraph>
            Zachary Reece, Founder
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' paragraph>
            I started coding when I was 9 years old.
          </Typography>
        </Grid>
        {/* Profile Picture */}
        <Grid item>
          <Avatar src={profile} alt='Profile Picture' sx={AvatarStyles} />
        </Grid>
        {/* Team */}
        <Grid item container sx={{ marginBottom: "15em" }}>
          {/* Yearbook photo for large and above screen sizes */}
          <Grid
            item
            container
            direction='column'
            alignItems={{ xs: "center", lg: "flex-start" }}
            display={{ xs: "none", lg: "flex" }}
            lg>
            <Grid item>
              <Box component='img' src={yearbook} alt='Year book picture' />
            </Grid>
            <Grid item>
              <Typography variant='caption'>a page from my Sophomore yearbook</Typography>
            </Grid>
          </Grid>
          {/* Summary Text */}
          <Grid
            item
            container
            direction='column'
            textAlign={{ xs: "center", lg: "initial" }}
            alignItems={{ xs: "center", lg: "center" }}
            lg>
            <Grid item sx={TeamSummaryStyles}>
              <Typography variant='body1' paragraph>
                I taught myself basic coding from a library book in third grade, and ever since then
                my passion has solely been set on learning — learning about computers, learning
                mathematics and philosophy, studying design, always just learning.
              </Typography>
              <Typography variant='body1' paragraph>
                Now I’m ready to apply everything I’ve learned, and to help others with the
                intuituion I have developed.
              </Typography>
            </Grid>
          </Grid>
          {/* Yearbook photo for medium and below screen sizes */}
          <Grid
            item
            container
            direction='column'
            alignItems={{ xs: "center", lg: "flex-start" }}
            display={{ xs: "flex", lg: "none" }}
            sx={{ marginBottom: "2.5em" }}
            lg>
            <Grid item>
              <Box
                component='img'
                src={yearbook}
                alt='Year book picture'
                sx={{ maxWidth: { xs: 200, sm: 300 } }}
              />
            </Grid>
            <Grid item>
              <Typography variant='caption'>a page from my Sophomore yearbook</Typography>
            </Grid>
          </Grid>
          {/* Puppy photo */}
          <Grid item container direction='column' alignItems={{ xs: "center", lg: "flex-end" }} lg>
            <Grid item>
              <Box
                component='img'
                src={puppy}
                alt='Puppy picture'
                sx={{ maxWidth: { xs: 200, sm: 300, lg: "initial" } }}
              />
            </Grid>
            <Grid item>
              <Typography variant='caption'>my miniature dapple dachshund, Sterling</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* CallToAction */}
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default About;
