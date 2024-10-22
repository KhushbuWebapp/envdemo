import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import DonutChart from "./components/DonutChart";
import BarChart from "./components/BarChart";
import StackbarChart from "./components/StackbarChart";
import AutoComplate from "./components/AutoComplate";
import ReactMap from "./components/ReactMap";
import ColorPicker from "./components/ColorPicker";
import AnotherComponent from "./components/AnotherComponent";
import ReactColorfull from "./components/ReactColorfull";
import StepperComponent from "./components/StepperComponent";
import { Skeleton } from "@mui/material";
import LoadingComponent from "./components/LoadingComponent";
import FileUploadComponent from "./components/FileUploadComponent";
import DataGridTablecomponent from "./components/DataGridTablecomponent";
import GridLayoutcomponent from "./components/GridLayoutcomponent";
import Lodashcomponent from "./components/Lodashcomponent";

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
  // Add more films as needed
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      {/* <center> */}
      <Routes>
        {/* <Route path="/" element={<BarChart />} /> */}
        <Route path="/bar" element={<BarChart />} />
        <Route path="/donut" element={<DonutChart />} />
        <Route path="/stackbar" element={<StackbarChart />} />
        <Route path="/autocomplate" element={<AutoComplate />} />
        <Route path="/reactmap" element={<ReactMap />} />
        {/* <Route path="/colorpicker" element={<ColorPicker />} /> */}
        {/* <Route path="/anothercomponent" element={<AnotherComponent />} /> */}
        <Route path="/reactcolorfull" element={<ReactColorfull />} />

        <Route path="/stepper" element={<StepperComponent />} />
        <Route path="/skeleton" element={<LoadingComponent />} />
        <Route path="/fileupload" element={<FileUploadComponent />} />
        <Route path="/datagridtable" element={<DataGridTablecomponent />} />
        <Route path="/gridlayout" element={<GridLayoutcomponent />} />
        <Route path="/lodash" element={<Lodashcomponent />} />
        <Route path="/" element={<Lodashcomponent />} />
      </Routes>
      {/* </center> */}
    </>
  );
}

export default App;
