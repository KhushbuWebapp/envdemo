import { Box } from "@mui/material";
import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const GridLayoutcomponent = () => {
  const layout = [
    { i: "1", x: 0, y: 0, w: 1, h: 6, static: false },
    { i: "2", x: 1, y: 0, w: 3, h: 6, minW: 2, maxW: Infinity },
    { i: "3", x: 4, y: 0, w: 1, h: 6 },
    { i: "4", x: 0, y: 0, w: 1, h: 6, static: false },
    { i: "5", x: 1, y: 0, w: 3, h: 6, minW: 2, maxW: Infinity },
    { i: "6", x: 4, y: 0, w: 1, h: 6 },
  ];
  return (
    <Box>
      {" "}
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        isResizable={true}
        rowHeight={30}
        width={2000}
      >
        <Box
          key="1"
          sx={{
            border: "1px solid red",
            borderRadius: "1rem",
            p: 2,
            overflow: "auto",
          }}
        >
          a
        </Box>
        <Box
          key="2"
          sx={{
            border: "1px solid red",
            borderRadius: "1rem",
            p: 2,
            overflow: "auto",
            backgroundColor: "whitesmoke",
            color: "balck",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
          consequatur neque. Eaque quis magnam reprehenderit maiores, quia
          voluptas voluptatibus eos commodi nostrum? Molestiae autem ducimus
          corporis deserunt laboriosam, cumque neque. Sed suscipit voluptate
          ipsum veritatis architecto impedit ducimus temporibus iste, laboriosam
          soluta delectus alias commodi repellendus minus facilis repellat fuga
          corporis, provident reprehenderit magnam quasi mollitia quisquam.
          Dolorum tenetur nihil culpa modi, sed dolore. Suscipit, quaerat? Illum
          qui laborum expedita laboriosam fugit ea earum, laudantium quos ab
          quidem iste placeat ullam officiis sint velit temporibus at molestiae
          culpa minus sapiente, adipisci exercitationem. Similique enim
          voluptatem minima iste voluptas hic quae.
        </Box>
        <Box
          key="3"
          sx={{
            border: "1px solid red",
            borderRadius: "1rem",
            p: 2,
            overflow: "auto",
          }}
        >
          c
        </Box>
        <Box
          key="4"
          sx={{
            border: "1px solid red",
            borderRadius: "1rem",
            p: 2,
            overflow: "auto",
          }}
        >
          d
        </Box>
        <Box
          key="5"
          sx={{
            border: "1px solid red",
            borderRadius: "1rem",
            p: 2,
            overflow: "auto",
          }}
        >
          This is the secret .env key : {import.meta.env.VITE_random_key}
        </Box>
        <Box
          key="6"
          sx={{
            border: "1px solid red",
            borderRadius: "1rem",
            p: 2,
            overflow: "auto",
          }}
        >
          f
        </Box>
      </GridLayout>
    </Box>
  );
};

export default GridLayoutcomponent;
