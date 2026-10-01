import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Typography,Box } from "@mui/material";
import { useState } from "react";
import getDesignTokens from "./styles/Theme";
import Appbar from "./componant/Appbar";
import Stack from "@mui/material/Stack";
import MyList from "./componant/MyList";
import Post from "./componant/Post";
import Section3 from "./componant/Section3";
import AddPost from "componant/Addpost";

function App() {
   const [showList, setShowList] = useState("none");
  const [ModeState, setModeState] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
        ? "light"
        : "dark",
  );
  const theme = React.useMemo(
    () => createTheme(getDesignTokens(ModeState)),
    [ModeState],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={theme.palette.mode}>
        <Appbar showList={showList} setShowList={setShowList} />
        <Stack direction="row" spacing={2}>
          <MyList theme={theme} setModeState={setModeState} showList={showList} setShowList={setShowList} />
          <Post/>
            
            
        <Section3 theme={theme}/>
        
        </Stack>
        <AddPost/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
