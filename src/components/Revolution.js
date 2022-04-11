import React from "react";
import Lottie from "react-lottie-player";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import vision from "../assets/vision.svg";
import consultation from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";
import technologyAnimation from "../animations/technologyAnimation/data.json";
import CallToAction from "./ui/CallToAction";

const Revolution = () => {
  return (
    <Grid container direction='column'>
      {/* Title */}
      <Grid item sx={{ padding: { xs: "1em 1.5em 1em", sm: "2em 5em 2em 5em" } }}>
        <Typography variant='h2' sx={{ fontFamily: "Pacifico" }}>
          The Revolution
        </Typography>
      </Grid>

      {/* Main Section -------------------------------- */}
      <Grid
        item
        container
        direction={{ xs: "column", lg: "row" }}
        sx={{
          padding: { xs: "0 1.5em", sm: "0 5em" },
          alignItems: "center",
          marginTop: { xs: "5em" },
        }}>
        {/* Binoculars image */}
        <Grid item lg>
          <Box
            component='img'
            src={vision}
            alt='Binoculars'
            sx={{ maxWidth: { xs:200, sm: 300, lg: "40em" }, marginRight: { xs: 0, lg: "5em" } }}
          />
        </Grid>
        {/* Vision Summary */}
        <Grid
          item
          container
          direction='column'
          textAlign={{ xs: "center", lg: "right" }}
          sx={{ maxWidth: { xs: "40em" }, marginTop: { xs: "5em", lg: 0 } }}
          lg>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Vision
            </Typography>
            <Typography variant='body1' paragraph>
              The rise of computers, and subsequently the Internet, has completely altered every
              aspect of human life. This has increased our comfort, broadened our connections, and
              reshaped how we view the world.
            </Typography>
            <Typography variant='body1' paragraph>
              What once was confined to huge rooms and teams of engineers now resides in every
              single one of our hands. Harnessing this unlimited potential by using it to solve
              problems and better lives is at the heart of everything we do.
            </Typography>
            <Typography variant='body1' paragraph>
              We want to help businesses capitalize on the latest and greatest technology. The best
              way to predict the future is to be the one building it, and we want to help guide the
              world into this next chapter of technological expansion, exploration, and innovation.
            </Typography>
            <Typography variant='body1' paragraph>
              By holding ourselves to rigorous standards and pristine quality, we can ensure you
              have the absolute best tools necessary to thrive in this new frontier.
            </Typography>
            <Typography variant='body1' paragraph>
              We see a future where every individual has personalized software custom tailored to
              their lifestyle, culture, and interests, helping them overcome life's obstacles. Each
              project is a step towards that goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Technology Section -------------------------------- */}
      <Grid item container sx={{ padding: { xs: "0 1.5em", sm: "0 5em" }, margin: "10em 0" }}>
        {/* Summary */}
        <Grid
          item
          container
          direction='column'
          sx={{ maxWidth: { xs: "40em" }, textAlign: { xs: "center", lg: "initial" } }}
          lg>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Technology
            </Typography>
            <Typography variant='body1' paragraph>
              In 2013, Facebook invented a new way of building websites. This new system, React.js,
              completely revolutionizes the process and practice of website development.
            </Typography>
            <Typography variant='body1' paragraph>
              Instead of chaining together long individual pages, like traditional websites, React
              websites are built with little chunks of code called components. These components are
              faster, easier to maintain, and are easily reused and customized, each serving a
              singular purpose.
            </Typography>
            <Typography variant='body1' paragraph>
              Two years later they shocked the world by releasing a similar system, React Native,
              for producing iOS and Android apps. Instead of having to master two completely
              separate development platforms, you can leverage the knowledge you already possessed
              from building websites and reapply it directly! This was a{" "}
              <strong>
                <em>huge</em>
              </strong>{" "}
              leap forward.
            </Typography>
            <Typography variant='body1' paragraph>
              This technology is now being used by companies like AirBnB, Microsoft, Netflix,
              Pinterest, Skype, Tesla, UberEats, and when Facebook purchased Instagram large
              portions of it were even rebuilt using React.
            </Typography>
            <Typography variant='body1' paragraph>
              Developers have since built on top of these systems by automating project setup and
              deployment, allowing creators to focus as much as possible on their work itself.
            </Typography>
            <Typography variant='body1' paragraph>
              These technical advancements translate into savings by significantly reducing the
              workload and streamlining the workflow for developing new pieces of software, while
              also lowering the barrier to entry for mobile app development.
            </Typography>
            <Typography variant='body1' paragraph>
              This puts personalization in your pocket — faster, better, and more affordable than
              ever before.
            </Typography>
          </Grid>
        </Grid>
        {/* Hammer Animation */}
        <Grid item container justifyContent={{ xs: "center", lg: "flex-end" }} lg>
          <Lottie
            loop
            animationData={technologyAnimation}
            play
            style={{ width: "100%", height: "100%", maxWidth: "40em" }}
          />
        </Grid>
      </Grid>

      {/* Process Section -------------------------------- */}
      <Grid item container justifyContent='center' sx={{ padding: { xs: "0 1.5em", sm: "0 5em" } }}>
        <Grid item>
          <Typography variant='h4' gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>

      {/* Consultation Section  */}
      <Grid
        item
        container
        direction={{ xs: "column", lg: "row" }}
        sx={{
          backgroundColor: "#b3b3b3",
          height: "90em",
          padding: { xs: "0 1.5em", sm: "0 5em" },
        }}>
        <Grid
          item
          container
          direction='column'
          sx={{
            textAlign: { xs: "center", lg: "initial" },
            alignItems: {xs: "center", lg: "initial"}
          }}
          lg>
          <Grid item sx={{ "&.MuiGrid-item": { xs:{maxWidth: "40em"}}}}>
            <Typography variant='h4' gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
              Consultation
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              Our process begins the moment you realize you need a piece of technology for your
              business. Whether you already have an idea for where to start and what to do, or if
              you just know you want to step things up, our initial consultation will help you
              examine your business holistically to find the best solutions.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              Detailed notes will be taken on your requirements and constraints, while taking care
              to identify other potential areas for consideration.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              Cutting-edge advancements in machine learning like object detection and natural
              language processing allow computers to do things previously unimaginable, and our
              expertise and intuition will help usher you into this new future of possibilities.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent='center' alignItems='center' lg>
          <Box
            component='img'
            src={consultation}
            alt='consultation image'
            sx={{ width: "100%", maxWidth: 700 }}
          />
        </Grid>
      </Grid>

      {/* Mockup Section */}
      <Grid
        item
        container
        direction={{ xs: "column", lg: "row" }}
        sx={{
          backgroundColor: "#ff7373",
          height: "90em",
          padding: { xs: "0 1.5em", sm: "0 5em" },
        }}>
        <Grid
          item
          container
          direction='column'
          sx={{
            textAlign: { xs: "center", lg: "initial" },
            alignItems: {xs: "center", lg: "initial"}
          }}
          lg>
          <Grid item sx={{ "&.MuiGrid-item": { xs:{maxWidth: "40em"}}}}>
            <Typography variant='h4' gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
              Mockup
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              After we settle on the best path forward and decide on a solution to pursue, details
              like the cost and timeline will be finalized.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              Then it’s time for us to start on your minimum viable product. That’s just a fancy
              term for a mockup, which doesn’t include colors, images, or any other polished design
              elements, but captures the essential layout structure and functionality.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              This helps us understand and refine the solution itself before getting distracted by
              specifics and looks.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent='center' alignItems='center' lg>
          <Box component='img' src={mockup} alt='mockup image' sx={{width: "100%",  maxWidth: 1000 }} />
        </Grid>
      </Grid>

      {/* Review Section */}
      <Grid
        item
        container
        direction={{ xs: "column", lg: "row" }}
        sx={{
          backgroundColor: "#39b54a",
          height: "90em",
          padding: { xs: "0 1.5em", sm: "0 5em" },
        }}>
        <Grid
          item
          container
          direction='column'
          sx={{
            textAlign: { xs: "center", lg: "initial" },
            alignItems: {xs: "center", lg: "initial"}
          }}
          lg>
          <Grid item sx={{ "&.MuiGrid-item": { xs:{maxWidth: "40em"}}}}>
            <Typography variant='h4' gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
              Review
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              Before moving any farther we come back to you with our progress. This gives you the
              freedom to discuss any changes you may want or any ideas you may have come up with
              before any heavy lifting has been done.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              We give you an interactive demonstration of the mockups, thoroughly explaining the
              thought process that went into each screen and every anticipated feature.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              Once you’re completely satisfied with the vision for our solution we get down to the
              nitty gritty, fine-details of design.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent='center' alignItems='center' lg>
          <Box
            component='img'
            src={review}
            alt='review image'
            sx={{ maxWidth: {xs: 200, sm:477},width: "100%",  }}
          />
        </Grid>
      </Grid>

      {/* Design Section */}
      <Grid
        item
        container
        direction={{ xs: "column", lg: "row" }}
        sx={{
          backgroundColor: "#a67c52",
          height: "90em",
          padding: { xs: "0 1.5em", sm: "0 5em" },
        }}>
        <Grid
          item
          container
          direction='column'
          sx={{
            textAlign: { xs: "center", lg: "initial" },
            alignItems: {xs: "center", lg: "initial"}
          }}
          lg>
          <Grid item sx={{"&.MuiGrid-item": { xs:{maxWidth: "40em"}}}}>
            <Typography variant='h4' gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
              Design
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              Using the mockups and notes taken during the consultation as guides, we will start
              ironing out what the final product will look like. This also involves using any brand
              material like fonts, colors, and logos to extend the experience you’re already
              familiar with.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              No aspect is superfluous, and care will be taken with every decision.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent='center' alignItems='center' lg>
          <Box
            component='img'
            src={design}
            alt='design image'
            sx={{ width: "100%"}}
          />
        </Grid>
      </Grid>

      {/* Review pt.2 Section */}
      <Grid
        item
        container
        direction={{ xs: "column", lg: "row" }}
        sx={{
          backgroundColor: "#39b54a",
          height: "90em",
          padding: { xs: "0 1.5em", sm: "0 5em" },
        }}>
        <Grid
          item
          container
          direction='column'
          sx={{
            textAlign: { xs: "center", lg: "initial" },
            alignItems: {xs: "center", lg: "initial"}
          }}
          lg>
          <Grid item sx={{"&.MuiGrid-item": { xs:{maxWidth: "40em"}}}}>
            <Typography variant='h4' gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
              Review
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              A second round of review is essential to our goal of creating exactly what you want,
              exactly how you want it.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              This time we’ll be going over the finalized designs in another fully interactive
              demonstration. Again this gives you an opportunity to tweak things and make sure we
              get everything right the first time.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent='center' alignItems='center' lg>
          <Box
            component='img'
            src={review}
            alt='review image'
            sx={{ maxWidth: {xs: 200, sm: 477}, width: "100%",  }}
          />
        </Grid>
      </Grid>

      {/* Build Section */}
      <Grid
        item
        container
        direction={{ xs: "column", lg: "row" }}
        sx={{
          backgroundColor: "#fbb03b",
          height: "90em",
          padding: { xs: "0 1.5em", sm: "0 5em" },
        }}>
        <Grid
          item
          container
          direction='column'
          sx={{
            textAlign: { xs: "center", lg: "initial" },
            alignItems: {xs: "center", lg: "initial"}
          }}
          lg>
          <Grid item sx={{"&.MuiGrid-item": { xs:{maxWidth: "40em"}}}}>
            <Typography variant='h4' gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
              Build
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              Here’s where we get down to business.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              Engineering begins after your approval on the final designs. We start by scaffolding
              out the project on a high level, prioritizing some areas over others.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              Each area is then developed in order of importance until ready to be connected to the
              next piece.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              Typically the backend, behind the scenes operations are completed first. Once all the
              services are in place we can then create the front end, user side of things.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              Finishing the application doesn’t mean we’re done though, because we use extensive
              testing to guarantee compatibility with all intended devices.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              Only after our rigorous examinations will we accept a product as finished, then
              pushing it through the production pipeline. This produces an optimized, compressed,
              consumer version of the code and assets ready for deployment.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent='center' alignItems='center' lg>
          <Box
            component='img'
            src={build}
            alt='build image'
            sx={{ maxWidth: {xs:200, sm: 700, lg: 1000}, width: "100%"}}
          />
        </Grid>
      </Grid>

      {/* Launch Section */}
      <Grid
        item
        container
        direction={{ xs: "column", lg: "row" }}
        sx={{
          backgroundColor: "#c1272d",
          height: "90em",
          padding: { xs: "0 1.5em", sm: "0 5em" },
        }}>
        <Grid
          item
          container
          direction='column'
          sx={{
            textAlign: { xs: "center", lg: "initial" },
            alignItems: {xs: "center", lg: "initial"}
          }}
          lg>
          <Grid item sx={{"&.MuiGrid-item": { xs:{maxWidth: "40em"}}}}>
            <Typography variant='h4' gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
              Launch
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              The moment we’ve all been waiting for.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              When construction comes to a close you’re the first one to know. We’ll give our final
              demonstration to show off your shiny new software in the wild so you know exactly how
              it will look to your users.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              When you say the word, we press the button and launch your project out to the public.
              We’re there to ensure everything goes to plan so you can start reaping the rewards of
              your technological investment immediately.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent='center' alignItems='center' lg>
          <Box
            component='img'
            src={launch}
            alt='launch image'
            sx={{ height: "100%", maxHeight:{xs: 600, sm: 1000} }}
          />
        </Grid>
      </Grid>

      {/* Maintain Section */}
      <Grid
        item
        container
        direction={{ xs: "column", lg: "row" }}
        sx={{
          backgroundColor: "#8e45ce",
          height: "90em",
          padding: { xs: "0 1.5em", sm: "0 5em" },
        }}>
        <Grid
          item
          container
          direction='column'
          sx={{
            textAlign: { xs: "center", lg: "initial" },
            alignItems: {xs: "center", lg: "initial"}
          }}
          lg>
          <Grid item sx={{"&.MuiGrid-item": { xs:{maxWidth: "40em"}}}}>
            <Typography variant='h4' gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
              Maintain
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              Our work doesn’t end there.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              After a successful launch we keep in close contact to listen to feedback and hear how
              the project is being received.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              From there on out we make sure your application is kept up to date and taking
              advantage of the best features and practices available. When new developments arise or
              new techniques are discovered in future projects, we will implement those advancements
              in your project as part of our routine maintenance.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent='center' alignItems='center' lg>
          <Box
            component='img'
            src={maintain}
            alt='maintain image'
            sx={{  height: "100%", maxHeight:{xs: 400, sm: 1000} }}
          />
        </Grid>
      </Grid>

      {/* Iterate Section */}
      <Grid
        item
        container
        direction={{ xs: "column", lg: "row" }}
        sx={{
          backgroundColor: "#29abe2",
          height: "90em",
          padding: { xs: "0 1.5em", sm: "0 5em" },
        }}>
        <Grid
          item
          container
          direction='column'
          sx={{
            textAlign: { xs: "center", lg: "initial" },
            alignItems: {xs: "center", lg: "initial" }
          }}
          lg>
          <Grid item sx={{"&.MuiGrid-item": { xs:{maxWidth: "40em"}}}}>
            <Typography variant='h4' gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
              Iterate
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              The cycle repeats whenever you come up with a new idea for extending your current
              project, or come up with a brand new system entirely.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              By planning for future features and changes we can build and evolve your application
              over time. As new use cases and customer needs develop we can respond with continuous
              integration of new content.
            </Typography>
            <Typography variant='body1' paragraph sx={{ color: "#fff" }}>
              Our iterative process will keep you current and competitive, allowing you to quickly
              implement changes instead of waiting months for a single update.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent='center' alignItems='center' lg>
          <Box component='img' src={iterate} alt='iterate image' sx={{ width: 975, maxWidth: "100%" }} />
        </Grid>
      </Grid>

      {/* CallToAction section -------------------------------- */}
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default Revolution;
