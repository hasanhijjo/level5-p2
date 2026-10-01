import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useRef, useState,  } from "react";
import { Avatar } from "@mui/material";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Appbar({showList, setShowList}) {
  const [showMobile, setShowMobile] = useState(false);
  const [showlaptop, setShowLaptop] = useState(false);

  const inputElementMobele = useRef(null);
  const inputElementLaptop = useRef(null);
  const renderMenu = (
    <Menu
      anchorEl={inputElementLaptop.current}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={showlaptop}
      onClose={() => {
        setShowLaptop(false);
      }}
    >
      <MenuItem
        onClick={() => {
          setShowLaptop(false);
        }}
      >
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => {
          setShowLaptop(false);
        }}
      >
        My account
      </MenuItem>
    </Menu>
  );
  const renderMobileMenu = (
    <Menu
      anchorEl={inputElementMobele.current}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={showMobile}
      onClose={() => {
        setShowMobile(false);
      }}
    >
      <MenuItem
        onClick={() => {
          setShowMobile(false);
        }}
      >
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem
        onClick={() => {
          setShowMobile(false);
        }}
      >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem
        onClick={() => {
          setShowMobile(false);
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
  
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
          onClick={() => {
          if(showList==="none"){
            setShowList("block")
          }else{
            setShowList("none")
          }
          }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{alignItems:"center", display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow:" 1 "}} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton sx={{width:"40px",height:"40px",}}
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton sx={{width:"40px",height:"40px",}}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton sx={{width:"40px",height:"40px",}}
              size="large"
              edge="end"
              aria-label="account of current user"
              ref={inputElementLaptop}
              aria-haspopup="true"
              onClick={() => {
                setShowLaptop(!showlaptop);
              }}
              color="inherit"
            >
            {/* <AccountCircle />*/}
            <Avatar src="./imges/user.png"/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              ref={inputElementMobele}
              color="inherit"
              onClick={() => {
                setShowMobile(!showMobile);
              }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>  {renderMobileMenu}
      {renderMenu}
      </AppBar>
    

  );
}
