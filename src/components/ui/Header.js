import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useTheme, useMediaQuery } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.svg";

const TabStyles = (theme) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: "25px",
  "&:hover": {
    color: "#fff",
  },
  "&.Mui-selected": {
    color: "#fff",
  },
});

const MenuItemStyles = {
  "&.MuiMenuItem-root": (theme) => ({ ...theme.typography.tab }),
  "&:hover": { color: "#fff" },
  "&.Mui-selected": {
    color: "#fff",
    backgroundColor: "primary.light",
  },
};

const ListItemButtonStyles = {
  "& .MuiListItemText-primary": { typography: "tab" },
  "&.Mui-selected": {
    "& .MuiListItemText-primary": { color: "#fff" },
    backgroundColor: "primary.light",
  },
};

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true, // little delay when scrolling
    threshold: 0, // how far to scroll before triggering
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const menuOptions = [
  { name: "Services", path: "/services" },
  { name: "Custom Software Development", path: "/customsoftware" },
  { name: "Mobile App Development", path: "/mobileapps" },
  { name: "Website Development", path: "/websites" },
];

const tabsOptions = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/revolution", name: "The Revolution" },
  { path: "/about", name: "About Us" },
  { path: "/contact", name: "Contact Us" },
];

const Header = () => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("lg"));

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabChange = (e, value) => {
    setSelectedTabIndex(value);
  };

  const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [drawerIsVisible, setDrawerIsVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);
  const menuIsVisible = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedMenuIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let pathname = useLocation().pathname;
  // Update the selected tab index using the parameter from url
  useEffect(() => {
    const tabIndex = tabsOptions.findIndex((tab) => tab.path === pathname);
    const menuIndex = menuOptions.findIndex((menu) => menu.path === pathname);

    if (pathname === "/estimate") {
      setSelectedTabIndex(tabIndex); // always -1 in this case.
    } else {
      setSelectedTabIndex(tabIndex === -1 ? 1 : tabIndex);
    }
    setSelectedMenuIndex(menuIndex);
  }, [pathname]);

  const tabs = (
    <>
      <Tabs value={selectedTabIndex} sx={{ marginLeft: "auto" }} onChange={handleTabChange}>
        {tabsOptions.map((tab, tabIndex) => (
          <Tab
            key={`Tab-${tab}-${tabIndex}`}
            component={Link}
            to={tab.path}
            sx={TabStyles}
            label={tab.name}
            aria-owns={
              tab.path === "/services" ? (anchorEl ? "simple-menu" : undefined) : undefined
            }
            aria-haspopup={tab.path === "/services" ? (anchorEl ? "true" : undefined) : undefined}
            onMouseOver={tab.path === "/services" ? handleClickListItem : undefined}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to='/estimate'
        variant='contained'
        color='secondary'
        sx={(theme) => ({
          ...theme.typography.estimate,
          borderRadius: "50px",
          marginLeft: "50px",
          marginRight: "25px",
          height: "45px",
          lineHeight: 1,
          textAlign: "center",
        })}>
        Free Estimate
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={menuIsVisible}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        sx={{
          "& .MuiMenu-paper": {
            backgroundColor: "common.blue",
            color: "rgba(255, 255, 255, 0.7)",
            borderRadius: 0,
          },
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted>
        {menuOptions.map((menuItem, index) => (
          <MenuItem
            key={menuItem.name}
            component={Link}
            to={menuItem.path}
            selected={selectedMenuIndex === index && selectedTabIndex === 1}
            onClick={(e) => handleMenuItemClick(e, index)}
            sx={MenuItemStyles}>
            {menuItem.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={drawerIsVisible}
        onOpen={() => setDrawerIsVisible(true)}
        onClose={() => setDrawerIsVisible(false)}
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "common.blue" } }}>
          <Box sx={{ minHeight: { xs: "4.5em", sm: "5.5em", lg: "7em" } }} />
        <List disablePadding>
          {tabsOptions.map((tab, tabIndex) => (
            <ListItemButton
              key={`ListItemButton-${tab}-${tabIndex}`}
              divider
              selected={selectedTabIndex === tabIndex}
              component={Link}
              to={tab.path}
              onClick={() => {
                setDrawerIsVisible(false);
                setSelectedTabIndex(tabIndex);
              }}
              sx={ListItemButtonStyles}>
              <ListItemText>{tab.name}</ListItemText>
            </ListItemButton>
          ))}
          <ListItemButton
            divider
            selected={selectedTabIndex === 5}
            component={Link}
            to='/estimate'
            onClick={() => {
              setDrawerIsVisible(false);
              setSelectedTabIndex(-1);
            }}
            sx={{ ...ListItemButtonStyles, backgroundColor: "secondary.main" }}>
            <ListItemText sx={{ "& .MuiListItemText-primary": { color: "#fff" } }}>
              Free Estimate
            </ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setDrawerIsVisible(!drawerIsVisible)}
        disableRipple
        sx={{ marginLeft: "auto" }}>
        <MenuIcon sx={{ height: "50px", width: "50px" }} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' color='primary' sx={{zIndex: theme.zIndex.drawer + 1}}>
          <Toolbar disableGutters>
            <Button component={Link} to='/' sx={{ padding: 0 }} disableRipple>
              <Box
                component='img'
                src={logo}
                alt='company logo'
                sx={{ height: { xs: "5em", sm: "6em", lg: "7em" } }}
              />
            </Button>
            {matchesMd ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* render a box to push content hidden under the appbar */}
      <Box sx={{ minHeight: { xs: "5em", sm: "6em", lg: "7em" } }} />
    </>
  );
};

export default Header;
