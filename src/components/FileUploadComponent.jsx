// import { Box, Button, TextField, Typography } from "@mui/material";
// import React, { useRef, useState } from "react";

// const FileUploadComponent = () => {
//   const defaultImage = "https://picsum.photos/200";
//   const [file, setFile] = useState(defaultImage);
//   const [isImage, setIsImage] = useState(true);

//   const getFile = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       const selectedFile = e.target.files[0];
//       const fileType = selectedFile.type;

//       if (fileType === "image/png" || fileType === "image/jpeg") {
//         setFile(URL.createObjectURL(selectedFile));
//         setIsImage(true);
//       } else if (fileType === "application/pdf") {
//         setFile(""); // Clear the image
//         setIsImage(false);
//       } else {
//         // Handle unsupported file types if needed
//         alert("Unsupported file type!");
//       }
//     }
//   };
//   const inputRef = useRef(null);
//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <div>
//       {/* this is the file upload component... */}
//       <br />
//       <hr />
//       <input ref={inputRef} />
//       <Button variant="contained" sx={{ mx: 3 }} onClick={handleClick}>
//         dispaly
//       </Button>
//       {/* <Box
//         height={400}
//         width={400}
//         // display={"flex"}
//         // justifyContent={"center"}
//         // alignItems={"center"}
//         sx={{
//           backgroundImage: isImage ? `url(${file})` : "none",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           position: "relative",
//           border: "2px dashed #fff",
//           bgcolor: isImage ? "transparent" : "lightgray",
//         }}
//       >
//         {isImage ? (
//           file ? (
//             <Typography
//               variant="h6"
//               sx={{ color: "black", position: "absolute" }}
//             >
//               <img
//                 src={file}
//                 alt="Uploaded"
//                 style={{ maxWidth: "100%", maxHeight: "100%" }}
//               />
//             </Typography>
//           ) : (
//             <Typography
//               variant="h6"
//               sx={{ color: "black", position: "absolute" }}
//             >
//               No file selected
//             </Typography>
//           )
//         ) : (
//           <Typography
//             variant="h6"
//             sx={{ color: "black", position: "absolute", mt: "10rem" }}
//           >
//             PDF file selected. Please check the file.
//           </Typography>
//         )}
//         <TextField
//           type="file"
//           onChange={getFile}
//           sx={{ position: "relative", zIndex: 1, bgcolor: "orange" }}
//         />
//       </Box> */}
//     </div>
//   );
// };

// export default FileUploadComponent;

// import React from "react";
// import { Button, Box } from "@mui/material";
// import { useVibrate } from "react-use";
// const FileUploadComponent = () => {
//   const [vibrating, setVibrating] = React.useState(false);
//   const duration = 1000; // vibration duration in milliseconds
//   useVibrate(vibrating, [300, 100, 300]); // vibration pattern (vibrate, pause, vibrate)
//   const handleClick = () => {
//     setVibrating(true);
//     setTimeout(() => setVibrating(false), duration);
//   };
//   return (
//     <Box
//       sx={{
//         height: "100vh",
//       }}
//     >
//       <input type="text" />
//       <hr />
//       <br />
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleClick}
//         sx={{
//           backgroundColor: "orange",
//           "&:hover": {
//             backgroundColor: "darkorange",
//           },
//         }}
//       >
//         button click
//       </Button>
//     </Box>
//   );
// };

// export default FileUploadComponent;

// import React from "react";
// import { Button, Box } from "@mui/material";
// import { css } from "@emotion/react"; // Import Emotion for CSS-in-JS

// const vibrationAnimation = css`
//   @keyframes vibrate {
//     0% {
//       transform: translateX(0);
//     }
//     25% {
//       transform: translateX(-2px);
//     }
//     50% {
//       transform: translateX(2px);
//     }
//     75% {
//       transform: translateX(-2px);
//     }
//     100% {
//       transform: translateX(0);
//     }
//   }

//   animation: vibrate 0.5s linear;
// `;

// const FileUploadComponent = () => {
//   const [isVibrating, setIsVibrating] = React.useState(false);

//   const handleClick = () => {
//     setIsVibrating(true);
//     setTimeout(() => setIsVibrating(false), 500); // Duration matches the animation
//   };

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//       }}
//     >
//       <input type="text" />
//       <hr />
//       <br />
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleClick}
//         sx={{
//           backgroundColor: "orange",
//           "&:hover": {
//             backgroundColor: "darkorange",
//           },
//           ...(isVibrating ? vibrationAnimation : {}),
//         }}
//       >
//         Button Click
//       </Button>
//     </Box>
//   );
// };

// export default FileUploadComponent;

// import React from "react";
// import { Button, Box } from "@mui/material";
// import { css } from "@emotion/react"; // Import Emotion for CSS-in-JS

// const vibrationAnimation = css`
//   @keyframes vibrate {
//     0% {
//       transform: translateX(0);
//     }
//     20% {
//       transform: translateX(-3px);
//     }
//     40% {
//       transform: translateX(3px);
//     }
//     60% {
//       transform: translateX(-3px);
//     }
//     80% {
//       transform: translateX(3px);
//     }
//     100% {
//       transform: translateX(0);
//     }
//   }

//   animation: vibrate 0.2s linear; // Faster duration
// `;

// const FileUploadComponent = () => {
//   const [isVibrating, setIsVibrating] = React.useState(false);
//   const [inputValue, setInputValue] = React.useState(""); // State to manage input field

//   const handleClick = () => {
//     setIsVibrating(true);
//     setTimeout(() => setIsVibrating(false), 200); // Duration matches the animation
//   };

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         style={{ marginBottom: "20px", padding: "10px", fontSize: "16px" }}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleClick}
//         sx={{
//           backgroundColor: "orange",
//           "&:hover": {
//             backgroundColor: "darkorange",
//           },
//           ...(isVibrating ? vibrationAnimation : {}),
//         }}
//       >
//         Button Click
//       </Button>
//     </Box>
//   );
// };

// export default FileUploadComponent;
import React from "react";
import { Button, Box } from "@mui/material";
import { useState } from "react";

const FileUploadComponent = () => {
  const [isVibrating, setIsVibrating] = useState(false);
  const handleMouseDown = () => {
    setIsVibrating(true);
    setTimeout(() => setIsVibrating(false), 200); // Duration matches the animation
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onMouseDown={handleMouseDown} // Trigger vibration on mouse down
        sx={{
          backgroundColor: "orange",
          "&:hover": {
            backgroundColor: "darkorange",
          },
          animation: isVibrating ? "vibrate 0.2s linear" : "none",
          "@keyframes vibrate": {
            "0%": { transform: "translateX(0)" },
            "20%": { transform: "translateX(-3px)" },
            "40%": { transform: "translateX(3px)" },
            "60%": { transform: "translateX(-3px)" },
            "80%": { transform: "translateX(3px)" },
            "100%": { transform: "translateX(0)" },
          },
        }}
      >
        Button Click
      </Button>
    </Box>
  );
};

export default FileUploadComponent;
