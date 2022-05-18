import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AssetsData = ({ assets, handleDeleteClick }) => {
  
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Asset</StyledTableCell>
            <StyledTableCell align="center">Date Purchased</StyledTableCell>
            <StyledTableCell align="right">Estimated Value</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ minWidth: 500 }}>
          {assets.map((asset) => (
            <StyledTableRow key={asset.id} >
              <StyledTableCell align="left">{asset.name}✏️</StyledTableCell>
              <StyledTableCell align="center">
                {asset.datePurchased}✏️
              </StyledTableCell>
              <StyledTableCell align="right">
                ${asset.estimatedValue}✏️
              </StyledTableCell>
              <StyledTableCell align="right">
                <button onClick={handleDeleteClick}>{asset.id}</button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AssetsData;
