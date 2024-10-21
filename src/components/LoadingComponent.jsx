import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Skeleton } from "@mui/material";

const LoadingComponent = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
  ];
  const [isLoader, setisLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoader(true);
    }, 2000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <Box display={"flex"} flexWrap={"wrap"}>
      {data.map((data, idx) =>
        isLoader ? (
          <CardContent key={idx}>
            <Box border={"1px solid black"} p={2} width={300} borderRadius={10}>
              {isLoader ? (
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  Word of the Day
                </Typography>
              ) : (
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  height={15}
                  width={"100%"}
                ></Skeleton>
              )}

              <Typography variant="h5" component="div">
                be.nev.o.lent
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button size="small">Learn More</Button>
              </CardActions>
            </Box>
          </CardContent>
        ) : (
          <Skeleton
            key={idx}
            variant="rectangular"
            width={300}
            height={200}
            sx={{ mx: 2, my: 2, borderRadius: 10 }}
            animation="wave"
          ></Skeleton>
        )
      )}
    </Box>
  );
};

export default LoadingComponent;
