import { createTheme } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: deepOrange,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});
