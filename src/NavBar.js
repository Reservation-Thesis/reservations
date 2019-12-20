import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menu: {
    backgroundColor: "#900C3F"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    padding: "13px",
    paddingRight: "30px",
    paddingLeft: "30px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    fontWeight: "bold"
  },
  about: {
    padding: "13px",
    paddingRight: "20px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    color: "#fff",
    fontSize: 18
  },
  contact: {
    padding: "13px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    color: "#fff",
    fontSize: 18
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  Button: {
    color: "#fff"
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.menu} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon>
              <Link to="/">Hojozat</Link>
            </MenuIcon>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap mr={20}>
            <Link to="/"></Link>
            Hojozat
          </Typography>
          <Button>
            <Typography className={classes.about} variant="h6" noWrap>
              About
            </Typography>
          </Button>
          <Button>
            <Typography className={classes.about} variant="h6" noWrap>
              Contact
            </Typography>
          </Button>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
