// src/app/result/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button, Box, Typography } from "@mui/material";

const ResultPage = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom color="textPrimary">
        Your Personality Type
      </Typography>
      <Typography variant="h5" component="p" gutterBottom color="textPrimary">
        {type}
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Retake Test
        </Button>
      </Link>
    </Box>
  );
};

export default ResultPage;
