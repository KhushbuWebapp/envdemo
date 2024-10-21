// import { Box, Button, Typography } from "@mui/material";
// import React, { useState } from "react";
// import { SketchPicker } from "react-color";

// const ColorPicker = () => {
//   const [currentColor, setcurrentColor] = useState("#e92121");
//   const [showColorPicker, setshowColorPicker] = useState(false);
//   const handleToggleColorPicker = () => {
//     setshowColorPicker(!showColorPicker);
//   };
//   const handleColorChange = (color) => {
//     setcurrentColor(color.hex);
//     console.log(color);
//   };

//   const applyStyle = {
//     backgroundColor: currentColor,
//   };
//   return (
//     <Box mt={2}>
//       <Button
//         variant="contained"
//         sx={{ bgcolor: applyStyle }}
//         onClick={handleToggleColorPicker}
//       >
//         pickcolor
//       </Button>
//       <Box height={300} width={300}>
//         {showColorPicker && (
//           <SketchPicker
//             color={currentColor}
//             onChangeComplete={handleColorChange}
//           />
//         )}
//       </Box>

//       <Box display={"flex"} gap={5}>
//         {" "}
//         {/* <Typography>React Color Picker : {currentColor}</Typography> */}
//         <Typography>React Color Picker</Typography>
//         <Box
//           height={50}
//           mx={3}
//           width={50}
//           borderRadius={"50%"}
//           sx={applyStyle}
//         ></Box>
//         <Button variant="contained" sx={{ bgcolor: applyStyle, mx: "2rem" }}>
//           Reset
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default ColorPicker;

// import { Box, Button, Typography } from "@mui/material";
// import React, { useState } from "react";
// import { SketchPicker } from "react-color";
// import { useColor } from "../usecontextReact/ColorContext";

// const ColorPicker = () => {
//   const { currentColor, setCurrentColor } = useColor();
//   const [showColorPicker, setShowColorPicker] = useState(false);

//   const handleToggleColorPicker = () => {
//     setShowColorPicker(!showColorPicker);
//   };

//   const handleColorChange = (color) => {
//     setCurrentColor(color.hex);
//   };

//   return (
//     <Box mt={2}>
//       <Button
//         variant="contained"
//         sx={{ bgcolor: currentColor }}
//         onClick={handleToggleColorPicker}
//       >
//         pickcolor
//       </Button>
//       <Box height={300} width={300}>
//         {showColorPicker && (
//           <SketchPicker
//             color={currentColor}
//             onChangeComplete={handleColorChange}
//           />
//         )}
//       </Box>

//       <Box display={"flex"} gap={5}>
//         <Typography>React Color Picker</Typography>
//         <Box
//           height={50}
//           mx={3}
//           width={50}
//           borderRadius={"50%"}
//           sx={{ backgroundColor: currentColor }}
//         ></Box>
//         <Button variant="contained" sx={{ bgcolor: currentColor, mx: "2rem" }}>
//           Reset
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default ColorPicker;

import React from "react";

const ColorPicker = () => {
  return <div>color picker</div>;
};

export default ColorPicker;
