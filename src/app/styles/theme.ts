import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#f8f8f8", // Off-white background
    },
    primary: {
      main: "#a9927d", // Beige color for primary
    },
    text: {
      primary: "#004d00", // Black text color
    },
  },
  typography: {
    h4: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
  },
});

export default theme;
