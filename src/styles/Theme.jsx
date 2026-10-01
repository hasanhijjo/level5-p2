import { teal } from "@mui/material/colors";

const getDesignTokens = (ModeState)=>({
  palette: {
      mode: ModeState,
      ...(ModeState === "light"
        ? {
            // palette values for Light mode
            malak: {
              main: "#647488",
            },
            listColor:{
              main:"rgb(247, 247, 247)"
            }
          }
        : {
            // palette values for dark mode
            malak: {
              main: teal[500],
            },listColor:{
              main:null
            }
          }),
    },
})

export default getDesignTokens;