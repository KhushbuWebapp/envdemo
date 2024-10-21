import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Container, CssBaseline, Typography } from "@mui/material";

// Sample movie data
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Dark Knight", year: 2008 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "Fight Club", year: 1999 },
  { title: "The Matrix", year: 1999 },
  { title: "Goodfellas", year: 1990 },
];

const AutoComplate = () => {
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h4" gutterBottom>
        Movie Selector
      </Typography>
      <Autocomplete
        disablePortal
        options={top100Films}
        getOptionLabel={(option) => option.title}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select a Movie"
            variant="outlined"
            // slotProps={{
            //   input: {
            //     style: {
            //       padding: "0px", // Set padding for the input
            //     },
            //   },
            // }}
            // sx={{
            //   "& .MuiOutlinedInput-root": {
            //     padding: "0px",
            //   },
            // }}
          />
        )}
      />
    </Container>
  );
};

export default AutoComplate;
