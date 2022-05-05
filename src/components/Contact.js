import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";

import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplaneIcon from "../assets/send.svg";
import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import { BackgroundImageStyles } from "./LandingPage";
import ButtonArrow from "./ui/ButtonArrow";

const SendButtonStyles = (theme) => ({
  ...theme.typography.estimate,
  borderRadius: "50px",
  height: { xs: "40px", md: "45px" },
  width: { xs: "225px", md: "245px" },
  fontSize: "1rem",
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
});

const Contact = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelperText, setEmailHelperText] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelperText, setPhoneHelperText] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [alert, setAlert] = useState({ open: false, message: "", backgroundColor: "" });
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("lg"));

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

  const contactFormIsValid =
    name.length !== 0 &&
    message.length !== 0 &&
    email.length !== 0 &&
    phone.length !== 0 &&
    phoneHelperText.length === 0 &&
    emailHelperText.length === 0;

  const onConfirm = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://us-central1-coachfinder-5b736.cloudfunctions.net/sendMail",
        {
          params: {
            name,
            email,
            phone,
            message,
          },
        }
      );
      console.log(res);
      setIsLoading(false);
      setOpen(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setAlert({
        open: true,
        message: "Message sent successfully",
        backgroundColor: "#4bb543",
      });
    } catch (err) {
      setIsLoading(false);
      setAlert({
        open: true,
        message: "Something went wrong, please try again",
        backgroundColor: "#ff3232",
      });
      console.log(err);
    }
  };

  const buttonContents = (
    <>
      Send Message
      <Box component='img' src={airplaneIcon} alt='airplane' sx={{ marginLeft: "1em" }} />
    </>
  );
  return (
    <Grid container>
      {/* Contact Form */}
      <Grid
        item
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        marginTop={{ xs: "2em", md: "5em", lg: 0 }}
        marginBottom={{ xs: "5em", lg: 0 }}
        lg={4}
        xl={3}>
        <Grid item>
          {/* Title + Subtitle */}
          <Grid item textAlign={{ xs: "center", lg: "initial" }}>
            <Typography variant='h2' sx={{ lineHeight: 1 }}>
              Contact Us
            </Typography>
            <Typography variant='body1' sx={{ color: "primary.main" }}>
              We're waiting
            </Typography>
          </Grid>

          {/* Phone Section */}
          <Grid item container sx={{ marginTop: "2em" }}>
            <Grid item>
              <Box component='img' src={phoneIcon} alt='phone' sx={{ marginRight: "0.5em" }} />
            </Grid>
            <Grid item>
              <Typography variant='body1' sx={{ color: "primary.main", fontSize: "1rem" }}>
                <Box
                  component='a'
                  href='tel:5555555555'
                  sx={{ textDecoration: "none", color: "inherit" }}>
                  (555) 555-5555
                </Box>
              </Typography>
            </Grid>
          </Grid>

          {/* Email Section */}
          <Grid item container sx={{ marginBottom: "2em" }}>
            <Grid item>
              <Box
                component='img'
                src={emailIcon}
                alt='phone'
                sx={{ marginRight: "0.5em", verticalAlign: "bottom" }}
              />
            </Grid>
            <Grid item>
              <Typography variant='body1' sx={{ color: "primary.main", fontSize: "1rem" }}>
                <Box
                  component='a'
                  href='mailto:testuser@gmail.com'
                  sx={{ textDecoration: "none", color: "inherit" }}>
                  testuser@gmail.com
                </Box>
              </Typography>
            </Grid>
          </Grid>

          {/* Name, Email, Phone */}
          <Grid
            item
            container
            direction='column'
            sx={{ "&.MuiGrid-item": { width: { xs: "20em" } } }}>
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
          </Grid>

          {/* Message */}
          <Grid item sx={{ "&.MuiGrid-item": { width: { xs: "20em" } } }}>
            <TextField
              sx={{
                border: `2px solid ${theme.palette.primary.main}`,
                marginTop: "5em",
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

          {/* Send Message Button */}
          <Grid item container justifyContent='center' sx={{ marginTop: "2em" }}>
            <Button
              variant='contained'
              sx={SendButtonStyles}
              disabled={!contactFormIsValid}
              onClick={() => setOpen(true)}>
              Send Message
              <Box component='img' src={airplaneIcon} alt='airplane' sx={{ marginLeft: "1em" }} />
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* Dialog for Send Message */}
      <Dialog
        fullScreen={matchesMd}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { padding: { xs: "1em 0", sm: "1em 5em", md: "1em 15em", lg: "5em 25em" } },
        }}>
        <DialogContent>
          <Grid container direction='column' alignItems='center'>
            <Grid item textAlign='center'>
              <Typography variant='h4' gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            {/* Dialog - Name Email Phone */}
            <Grid
              item
              container
              direction='column'
              sx={{ "&.MuiGrid-root.MuiGrid-item": { width: {xs: "100%", md: "20em"} } }}>
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
            </Grid>

            {/* Dialog - Message */}
            <Grid item sx={{ "&.MuiGrid-root.MuiGrid-item": { width: {xs: "100%", md: "20em"} } }}>
              <TextField
                sx={{
                  border: `2px solid ${theme.palette.primary.main}`,
                  marginTop: "5em",
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

            {/* Dialog - Buttons */}
            <Grid
              item
              container
              direction={{ xs: "column", lg: "row" }}
              sx={{ marginTop: "2em", alignItems: "center" }}>
              <Grid item>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  sx={SendButtonStyles}
                  disabled={!contactFormIsValid || isLoading}
                  onClick={onConfirm}>
                  {isLoading ? <CircularProgress size={30} /> : buttonContents}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      {/* Snackbar when send message button is clicked */}
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />

      {/* Call To Action */}
      <Grid
        item
        container
        sx={{
          ...BackgroundImageStyles(matchesMd ? mobileBackground : background),
          height: "60rem",
          alignItems: "center",
          justifyContent: { xs: "center", lg: "initial" },
          paddingBottom: "10em",
        }}
        direction={{ xs: "column", lg: "row" }}
        lg={8}
        xl={9}>
        <Grid
          item
          sx={{ marginLeft: { xs: 0, lg: "3em" }, textAlign: { xs: "center", lg: "initial" } }}
          lg>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h2'>
                Simple Software. <br />
                Revolutionary Results.
              </Typography>
              <Typography variant='subtitle2' fontSize='1.5rem'>
                Take advantage of the 21st Century.
              </Typography>
              <Grid item container justifyContent={{ xs: "center", lg: "initial" }}>
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
          lg
          sx={{
            marginRight: { xs: 0, lg: "5em" },
            marginLeft: { xs: 0, lg: "2em" },
            marginTop: { xs: "2em", lg: 0 },
            textAlign: { xs: "center", lg: "right" },
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
    </Grid>
  );
};

export default Contact;
