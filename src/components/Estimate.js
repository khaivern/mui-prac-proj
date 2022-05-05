import React, { useState } from "react";
import { cloneDeep } from "lodash";
import Lottie from "react-lottie-player";
import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import people from "../assets/people.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import users from "../assets/users.svg";
import iphone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";

import estimateAnimation from "../animations/estimateAnimation/data.json";

const IconStyles = {
  width: "12em",
  height: "10em",
};

const EstimateButtonStyles = (theme) => ({
  ...theme.typography.estimate,
  borderRadius: 50,
  backgroundColor: "secondary.main",
  height: "50px",
  width: "225px",
  fontSize: "1.25rem",
  marginTop: "5em",
  "&:hover": {
    backgroundColor: "secondary.light",
  },
});

const TotalEstimateTextStyles = {
  fontWeight: 700,
  fontSize: "1.25rem",
  fontFamily: "Raleway",
  color: "secondary.main",
};

const defaultQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "iOS/Android App Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "phones and tablet outline",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 0,
      },
    ],
  },
];

const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: iphone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

const Estimate = () => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("lg"));

  const [questions, setQuestions] = useState(defaultQuestions); // current set of questions
  const [total, setTotal] = useState(0); // total estimated cost (dialog)

  // Display dialog when get estimate button is clicked
  const [dialogIsVisible, setDialogIsVisible] = useState(false);

  // Dialog text field states (left)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelperText, setEmailHelperText] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelperText, setPhoneHelperText] = useState("");
  const [message, setMessage] = useState("");

  // Dialog summary states (right)
  const [service, setService] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState("");
  const [users, setUsers] = useState("");

  const [category, setCategory] = useState("");

  // Move to next question
  const nextQuestionHandler = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;
    newQuestions[activeIndex] = { ...newQuestions[activeIndex], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };

  // Move to prev question
  const prevQuestionHandler = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;
    newQuestions[activeIndex] = { ...newQuestions[activeIndex], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };

  // Disable prev arrow when on first question
  const navigationPreviousDisabledHandler = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === 1) {
      return true;
    }
    return false;
  };

  // Disable next arrow when on last question
  const navigationNextDisabledHandler = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      return true;
    }
    return false;
  };

  // When an option is selected
  const onOptionSelectHandler = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const prevSelected = currentlyActive[0].options.filter((option) => option.selected);
    const newSelected = newQuestions[activeIndex].options[id - 1];

    switch (currentlyActive[0].subtitle) {
      case "Select one.":
        if (prevSelected[0]) {
          prevSelected[0].selected = !prevSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
    }

    switch (newSelected.title) {
      case "Custom Software Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        break;
      case "iOS/Android App Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        break;
      case "Website Development":
        setQuestions(websiteQuestions);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setUsers("");
        setService(newSelected.title);
        break;
      default:
        setQuestions(newQuestions);
    }
  };

  // Validation check on email and phone text field (dialog)
  const onChange = (e) => {
    let isValid = true;
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value);
        if (!isValid) {
          setEmailHelperText("Email entered is not valid");
        } else {
          setEmailHelperText("");
        }
        return;
      case "phone":
        setPhone(e.target.value);
        isValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e.target.value);
        if (!isValid) {
          setPhoneHelperText("Phone entered is not valid");
        } else {
          setPhoneHelperText("");
        }
        return;
      default:
        return;
    }
  };

  // Calculate total estimated cost function when get estimate button is clicked (Summary on dialog)
  const getTotal = () => {
    let cost = 0;

    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((option) => option.length > 0);

    selections.map((options) => options.map((option) => (cost += option.cost)));

    if (questions.length > 2) {
      const user = questions
        .filter((question) => question.title === "How many users do you expect?")[0]
        .options.filter((option) => option.selected)[0];
      cost = (cost - user.cost) * user.cost;
      setUsers(user.title);
    }

    setTotal(cost);
  };

  // Filter the selected platform(s) (second check on dialog)
  const getPlatforms = () => {
    let newPlatforms = [];

    if (questions.length > 2) {
      questions
        .filter((question) => question.title === "Which platforms do you need supported?")[0]
        .options.filter((option) => option.selected)
        .map((option) => newPlatforms.push(option.title));
      setPlatforms(newPlatforms);
    }
  };

  const getFeatures = () => {
    let newFeatures = [];

    if (questions.length > 2) {
      questions
        .filter((question) => question.title === "Which features do you expect to use?")
        .map((question) => question.options.filter((option) => option.selected))
        .map((options) => options.map((option) => newFeatures.push(option.title)));
    }
    setFeatures(newFeatures);
  };

  const getCustomFeatures = () => {
    let customFeatures = "";

    if (questions.length > 2) {
      customFeatures = questions
        .filter(
          (question) => question.title === "What type of custom features do you expect to need?"
        )
        .map((question) => question.options.filter((option) => option.selected))[0][0].title;
    }
    setCustomFeatures(customFeatures);
  };

  const softwareSelection = (
    <Grid container direction='column'>
      {/* Service Summary */}
      <Grid item container alignItems='center' marginBottom='1.25em'>
        <Grid item xs={2}>
          <Box component='img' src={check} alt='checkmark' />
        </Grid>
        <Grid item xs={10}>
          <Typography variant='body1'>
            You want {service}
            {platforms.length > 0
              ? ` for ${
                  //if only web application is selected...
                  platforms.indexOf("Web Application") > -1 && platforms.length === 1
                    ? //then finish sentence here
                      "a Web Application."
                    : //otherwise, if web application and another platform is selected...
                    platforms.indexOf("Web Application") > -1 && platforms.length === 2
                    ? //then finish the sentence here
                      `a Web Application and an ${platforms[1]}.`
                    : //otherwise, if only one platform is selected which isn't web application...
                    platforms.length === 1
                    ? //then finish the sentence here
                      `an ${platforms[0]}`
                    : //otherwise, if other two options are selected...
                    platforms.length === 2
                    ? //then finish the sentence here
                      "an iOS Application and an Android Application."
                    : //otherwise if all three are selected...
                    platforms.length === 3
                    ? //then finish the sentence here
                      "a Web Application, an iOS Application, and an Android Application."
                    : null
                }`
              : null}
          </Typography>
        </Grid>
      </Grid>

      <Grid item container alignItems='center' marginBottom='1.25em'>
        <Grid item xs={2}>
          <Box component='img' src={check} alt='checkmark' />
        </Grid>
        <Grid item xs={10}>
          <Typography variant='body1'>
            {"with "}
            {/* if we have features... */}
            {features.length > 0
              ? //...and there's only 1...
                features.length === 1
                ? //then end the sentence here
                  `${features[0]}.`
                : //otherwise, if there are two features...
                features.length === 2
                ? //...then end the sentence here
                  `${features[0]} and ${features[1]}.`
                : //otherwise, if there are three or more features...
                  features
                    //filter out the very last feature...
                    .filter((feature, index) => index !== features.length - 1)
                    //and for those features return their name...
                    .map((feature, index) => <span key={index}>{`${feature}, `}</span>)
              : null}
            {features.length > 2
              ? //...and then finally add the last feature with 'and' in front of it
                ` and ${features[features.length - 1]}.`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems='center'>
        <Grid item xs={2}>
          <Box component='img' src={check} alt='checkmark' />
        </Grid>
        <Grid item xs={10}>
          <Typography variant='body1'>
            The custom features will be of {customFeatures.toLowerCase()}
            {`, and the project will be used by about ${users} users`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  const getCategory = () => {
    if (questions.length === 2) {
      const selected = questions
        .filter((question) => question.title === "Which type of website are you wanting?")[0]
        .options.filter((option) => option.selected)[0];
      setCategory(selected.title);
    }
  };

  const websiteSelection = (
    <Grid container direction='column' marginTop="14em">
      {/* Website Selection Summary */}
      <Grid item container alignItems='center'>
        <Grid item xs={2}>
          <Box component='img' src={check} alt='checkmark' />
        </Grid>
        <Grid item xs={10}>
          <Typography variant='body1'>
            You want {category === "Basic" ? "a Basic Website" : `an ${category} Website.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid container>
      {/* Estimate Title + Animation */}
      <Grid item container direction='column' alignItems={{ xs: "center", lg: "initial" }} lg>
        <Grid item sx={{ marginTop: "2em", marginLeft: { xs: 0, lg: "5em" } }}>
          <Typography textAlign={{ xs: "center", lg: "initial" }} variant='h2'>
            Estimate
          </Typography>
        </Grid>
        <Grid
          item
          marginRight={{ xs: 0, lg: "10em" }}
          style={{ maxWidth: "50em", marginTop: "7.5em" }}>
          <Lottie
            style={{ width: "100%", height: "100%" }}
            loop
            animationData={estimateAnimation}
            play
          />
        </Grid>
      </Grid>

      {/* Estimate Section */}
      <Grid
        item
        container
        direction='column'
        lg
        sx={{ marginRight: { xs: 0, lg: "2em" }, marginBottom: "25em", alignItems: "center" }}>
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              {/* Question Title */}
              <Grid item>
                <Typography
                  variant='h2'
                  textAlign='center'
                  sx={{
                    fontWeight: 500,
                    fontSize: "2.25rem",
                    marginTop: "5em",
                    lineHeight: 1.25,
                    marginLeft: { xs: "1em", lg: 0 },
                    marginRight: { xs: "1em", lg: 0 },
                  }}>
                  {question.title}
                </Typography>
                <Typography
                  variant='body1'
                  textAlign='center'
                  sx={{ marginBottom: "2.5em" }}
                  gutterBottom>
                  {question.subtitle}
                </Typography>
              </Grid>

              {/* Answer Options */}
              <Grid item container>
                {question.options.map((option, index) => (
                  <Grid
                    component={Button}
                    onClick={() => onOptionSelectHandler(option.id)}
                    sx={{
                      display: "grid",
                      textTransform: "none",
                      borderRadius: 0,
                      backgroundColor: option.selected ? "secondary.main" : null,
                      "&:hover": {
                        backgroundColor: option.selected ? "secondary.light" : null,
                      },
                      marginBottom: { xs: "1.5em", lg: 0 },
                    }}
                    item
                    container
                    direction='column'
                    md
                    alignItems='center'
                    textAlign='center'
                    key={index}>
                    <Grid item style={{ maxWidth: "14em" }}>
                      <Typography variant='h6' marginBottom='1em'>
                        {option.title}
                      </Typography>
                      <Typography variant='caption'>{option.subtitle}</Typography>
                    </Grid>
                    <Grid item>
                      <Box sx={IconStyles} component='img' src={option.icon} alt={option.iconAlt} />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}

        {/* Next Arrows */}
        <Grid
          item
          container
          justifyContent='space-between'
          sx={{ width: "18em", marginTop: "3em" }}>
          <Grid item>
            <IconButton
              disabled={navigationPreviousDisabledHandler()}
              onClick={prevQuestionHandler}>
              <Box
                component='img'
                src={navigationPreviousDisabledHandler() ? backArrowDisabled : backArrow}
                alt='Previous Question'
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton disabled={navigationNextDisabledHandler()} onClick={nextQuestionHandler}>
              <Box
                component='img'
                src={navigationNextDisabledHandler() ? forwardArrowDisabled : forwardArrow}
                alt='Next Question'
              />
            </IconButton>
          </Grid>
        </Grid>

        {/* Get Estimate Button */}
        <Grid item>
          <Button
            sx={EstimateButtonStyles}
            onClick={() => {
              getTotal();
              getPlatforms();
              getFeatures();
              getCustomFeatures();
              getCategory();
              setDialogIsVisible(true);
            }}>
            Get Estimate
          </Button>
        </Grid>
      </Grid>

      {/* Confirmation Dialog */}
      <Dialog
        fullScreen={matchesMd}
        open={dialogIsVisible}
        onClose={() => setDialogIsVisible(false)}
        fullWidth
        maxWidth='lg'>
        <Grid item textAlign='center' marginTop='1em' marginBottom='1em'>
          <Typography variant='h2' gutterBottom>
            Estimate
          </Typography>
        </Grid>
        <DialogContent>
          <Grid
            item
            container
            direction={{ xs: "column", lg: "row" }}
            alignItems={{ xs: "center", lg: "initial" }}
            justifyContent='space-around'>
            {/* Left Section */}
            <Grid item container direction='column' style={{ maxWidth: "20em" }} md={7}>
              {/* Name, Email, Phone */}
              <Grid item marginBottom='0.5em'>
                <TextField
                  label='Name'
                  id='name'
                  variant='standard'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item marginBottom='0.5em'>
                <TextField
                  label='Email'
                  id='email'
                  variant='standard'
                  value={email}
                  onChange={onChange}
                  fullWidth
                  error={!!emailHelperText}
                  helperText={emailHelperText}
                />
              </Grid>
              <Grid item marginBottom='0.5em'>
                <TextField
                  label='Phone'
                  id='phone'
                  variant='standard'
                  value={phone}
                  onChange={onChange}
                  fullWidth
                  error={!!phoneHelperText}
                  helperText={phoneHelperText}
                />
              </Grid>
              {/* Message */}
              <Grid item style={{ maxWidth: "20em" }}>
                <TextField
                  sx={{
                    border: `2px solid ${theme.palette.primary.main}`,
                    marginTop: "3em",
                    marginBottom: "2em",
                    borderRadius: "5px",
                  }}
                  InputProps={{ disableUnderline: true }}
                  multiline
                  id='message'
                  variant='standard'
                  rows={10}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  fullWidth
                />
              </Grid>

              {/* Estimate Summary */}
              <Grid item container direction='column' style={{ maxWidth: "20em" }} textAlign={{xs: "center", lg: "initial"}}>
                <Typography variant='body1' paragraph>
                  We can create this digital solution for an estimated{" "}
                  <Box component='span' sx={TotalEstimateTextStyles}>
                    ${total.toFixed(2)}
                  </Box>
                </Typography>
                <Typography variant='body1' paragraph>
                  Fill our your name, phone number, and email, place your request, and we'll get
                  back to you with details moving forward and a final price.
                </Typography>
              </Grid>
            </Grid>

            {/* Right Section */}
            <Grid
              item
              container
              direction='column'
              alignItems={{ xs: "center", lg: "initial" }}
              md={5}
              style={{ maxWidth: "30em" }}>
              <Grid item sx={{ display: { xs: "none", lg: "initial" } }}>
                {questions.length > 2 ? softwareSelection : websiteSelection}
              </Grid>
              <Grid item>
                <Button sx={EstimateButtonStyles}>
                  Place Request
                  <Box
                    component='img'
                    src={send}
                    alt='paper airplane'
                    sx={{ marginLeft: "0.5em" }}
                  />
                </Button>
              </Grid>
              <Grid item sx={{ display: { xs: "initial", lg: "none" }, marginBottom: {xs: "5em", lg: 0} }}>
                <Button onClick={() => setDialogIsVisible(false)}>Cancel</Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default Estimate;
