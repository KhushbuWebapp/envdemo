import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useColor } from "../usecontextReact/ColorContext";

const AnotherComponent = () => {
  const { currentColor } = useColor();

  return (
    <Box mt={2}>
      <Typography>Another Component</Typography>
      <Button variant="contained" sx={{ bgcolor: currentColor }}>
        Button with Shared Color
      </Button>
    </Box>
  );
};

export default AnotherComponent;
