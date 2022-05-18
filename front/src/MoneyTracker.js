import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddMoneyTrackerItem from "./AddMoneyTrackerItem";

const MoneyTracker = ({ items, setItems }) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  if (!items) {
    return <h2>LOADING......</h2>;
  }

  function handleDeleteClick(e) {
    fetch(`http://localhost:9292/items/${e.target.id}`, {
      method: "DELETE"
    })
    handleDeleteItem(e.target.id)
  }

  function handleDeleteItem(id) {
    const updatedItem = items.filter((item) => item.id !== parseInt(id));
    setItems(updatedItem);
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
        Add Expense
      </button>
      <AddMoneyTrackerItem
        items={items}
        setItems={setItems}
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Edit</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="center">Cost</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ minWidth: 500 }}>
            {items.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell className="cursor" align="left">
                  ✏️
                </StyledTableCell>
                <StyledTableCell align="left">{item.name}</StyledTableCell>
                <StyledTableCell align="center">${item.cost}</StyledTableCell>
                <StyledTableCell align="center">
                  {item.category}
                </StyledTableCell>
                <StyledTableCell align="right">{item.date}</StyledTableCell>
                <StyledTableCell align="right">
                  <button onClick={handleDeleteClick} id={item.id}>x</button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MoneyTracker;
