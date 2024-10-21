import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step, { StepContext } from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Box, Button, Stack, StepContent, Typography } from "@mui/material";

const StepperComponent = () => {
  const steps = [
    "First Step",
    "Second Step",
    "Third Step",
    "Fourth Step",
    "Fifth Step",
  ];
  const [activeStep, setactiveStep] = useState(0);
  const handleNext = () => {
    if (activeStep < steps.length) setactiveStep((prev) => prev + 1);
  };
  const handlePrevious = () => {
    if (activeStep > 0)
      // preventing negative step index
      setactiveStep((prev) => prev - 1);
  };
  return (
    <>
      <Typography variant="h3">MUI Stepper Component</Typography>
      <Box
        mx={3}
        mt={2}
        // display={"flex"}
        // justifyContent={"center"}
        // alignItems={"center"}
      >
        <Stepper
          activeStep={activeStep}
          alternativeLabel={false}
          orientation="vertical"
        >
          {steps.map((steps, idx) => (
            <Step key={idx}>
              <StepLabel>
                <Box border={"2px solid red"} borderRadius={"8px"}>
                  <Typography variant="h3"> {steps}</Typography>
                  {idx === 2 && (
                    <>
                      <Typography
                        variant="body1"
                        color="secondary"
                        // width={350}
                        align="justify"
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eius natus vero expedita unde. Voluptatem
                        necessitatibus maxime voluptatibus at sint facilis
                        repellendus natus voluptates iusto ex, assumenda
                        corporis ut laudantium veniam.{" "}
                      </Typography>
                    </>
                  )}
                </Box>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box
        display="flex"
        gap={"2rem"}
        justifyContent={"start"}
        alignItems={"center"}
        mt={2}
      >
        <Button variant="contained" onClick={handlePrevious}>
          Previous
        </Button>
        <Button variant="outlined" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </>
  );
};

export default StepperComponent;
