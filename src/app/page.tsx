// src/app/page.tsx
import Link from "next/link";
import { Button, Box, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom color="textPrimary">
        Welcome to the Personality Test
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Link href="/test" passHref>
          <Button variant="contained" color="primary">
            Start Test
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HomePage;
