import { createTheme } from "@mui/material";
import { deepOrange, green } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: green,
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
