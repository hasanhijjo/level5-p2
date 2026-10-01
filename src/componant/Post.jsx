import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
export default function Post() {
  const myCards = [
    {
      letter: "H",
      color: "purple",
      userName: "Haya ali",
      imgLink:
        "https://images.pexels.com/photos/34311933/pexels-photo-34311933.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      letter: "N",
      color: "teal",
      userName: "Noor moh",
      imgLink:
        "https://images.pexels.com/photos/18488300/pexels-photo-18488300.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      letter: "M",
      color: "pink",
      userName: "Malak sh",
      imgLink:
        "https://images.pexels.com/photos/34163375/pexels-photo-34163375.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];
  const [CardMenu, setCardMenu] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setCardMenu(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setCardMenu(false);
  };
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={CardMenu}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: "8" }} className="mymode" variant="h6">
      {myCards.map((item) => {
        return (
          <Card sx={{ maxWidth: 345, mx: "auto", my: "40px" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: item.color }} aria-label="recipe">
                  {item.letter}
                </Avatar>
              }
              action={
                <IconButton onClick={handleClick} aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.userName}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={item.imgLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            <Box sx={{flexGrow: "1"}}></Box>
              <Checkbox
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
              />
            </CardActions>
          </Card>
        );
      })}
      {renderMenu}
    </Box>
  );
}
