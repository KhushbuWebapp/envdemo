import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, ClickAwayListener } from "@mui/material";
const DataGridTablecomponent = () => {
  const [selectionModel, setSelectionModel] = useState([]);
  const handleSelection = (newSelection) => {
    if (newSelection) {
      setSelectionModel(newSelection.selectionModel);
    } else {
      setSelectionModel(null);
    }
  };
  const handleClickAway = () => {
    handleSelection(null);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "role", headerName: "Role", width: 150 },
  ];

  const rows = [
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "User" },
    { id: 3, name: "Alice Johnson", role: "Manager" },
    { id: 4, name: "Bob Brown", role: "User" },
  ];

  const handleRowSelection = (newSelection) => {
    setSelectionModel(newSelection);
  };

  const handleRemoveSelection = () => {
    setSelectionModel([]); // Clear the selection
  };
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Button
        variant="contained"
        onClick={handleRemoveSelection}
        sx={{ mb: 2 }}
      >
        Remove Selection
      </Button>
      <ClickAwayListener onClickAway={handleClickAway}>
        {/* <ClickAwayListener onClickAway={() => setSelectionModel([])}> */}
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection // <= works with or without checkbox selection
          disableSelectionOnClick
          //   selectionModel={selectionModel}
          //   onSelectionModelChange={({ selectionModel }) =>
          //     setSelectionModel(selectionModel)
          //   }
          onSelectionModelChange={handleSelection}
          selectionModel={selectionModel}
          pageSize={5}
          rowsPerPageOptions={[5]}
          autoHeight
        />
      </ClickAwayListener>
      {/* <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        selectionModel={selectionModel}
        onSelectionModelChange={handleRowSelection}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight
      /> */}
    </Box>
  );
};

export default DataGridTablecomponent;
