import * as React from "react";
import { useState } from "react";
import AddAsset from "./AddAsset";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./App.css"

const Assets = ({ assets, setAssets}) => {

  const [buttonPopup, setButtonPopup] = useState(false);

  if (!assets) {
    return <h2>LOADING......</h2>;
  }

  function handleDeleteClick(e) {
    fetch(`http://localhost:9292/users/1/assets/${e.target.id}`, {
      method: "DELETE"
    })
    handleDeleteAsset(e.target.id)
  }

  function handleDeleteAsset(id) {
    const updatedAssets = assets.filter((asset) => asset.id !== parseInt(id));
    setAssets(updatedAssets);
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div>
      <button
        onClick={() => {
          setButtonPopup(true);
        }}
      >
        Add Asset
      </button>
      <AddAsset
        assets={assets}
        setAssets={setAssets}
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
      />
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Edit</StyledTableCell>
            <StyledTableCell align="left">Asset</StyledTableCell>
            <StyledTableCell align="center">Date Purchased</StyledTableCell>
            <StyledTableCell align="right">Estimated Value</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ minWidth: 500 }}>
          {assets.map((asset) => (
            <StyledTableRow key={asset.id} >
              <StyledTableCell className="cursor" align="left">✏️</StyledTableCell>
              <StyledTableCell align="left">{asset.name}</StyledTableCell>
              <StyledTableCell align="center">
                {asset.date_purchased}
              </StyledTableCell>
              <StyledTableCell align="right">
                ${asset.estimated_value}
              </StyledTableCell>
              <StyledTableCell align="right">
                <button onClick={handleDeleteClick } id={asset.id}>x</button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default Assets;
