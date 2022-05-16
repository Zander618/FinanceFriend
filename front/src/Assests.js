import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "react-bootstrap";

const Assests = () => {
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

  const [assests, setAssests] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/assests")
      .then((resp) => resp.json())
      .then((data) => setAssests(data));
  }, []);

  if (!assests) {
    return <h2>LOADING......</h2>;
  }

  return (
    <div>
      <button>Add Assest</button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Assest</StyledTableCell>
              <StyledTableCell align="center">Date Purchased</StyledTableCell>
              <StyledTableCell align="right">Estimated Value</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ minWidth: 500 }}>
            {assests.map((row) => (
              <StyledTableRow key={row.id}>
                {/* <StyledTableCell component="th" scope="row">
                  </StyledTableCell> */}
                <StyledTableCell align="left">{row.assest}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.datePurchased}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.estimatedValue}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Assests;
