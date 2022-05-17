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
import AddMoneyTrackerItem from "./AddMoneyTrackerItem";

const MoneyTracker = () => {

  const [items, setItems] = useState();
  const [buttonPopup, setButtonPopup] = useState(false);

  // function handleDeleteClick() {
  //   fetch(`http://localhost:3001/assets/${assets.id}`, {
  //     method: "DELETE"
  //   })
  //     console.log(assets.id)
  // }

  
  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((resp) => resp.json())
      .then((data) => setItems(data));
  }, []);

  if (!items) {
    return <h2>LOADING......</h2>;
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
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="center">Cost</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ minWidth: 500 }}>
            {items.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell align="left">{item.name}✏️</StyledTableCell>
                <StyledTableCell align="center">${item.cost}✏️</StyledTableCell>
                <StyledTableCell align="center">{item.category}✏️</StyledTableCell>
                <StyledTableCell align="right">{item.date}✏️</StyledTableCell>
                <StyledTableCell><button>x</button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MoneyTracker;
