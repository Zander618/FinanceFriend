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
import AddExpense from "./AddExpense";

const Expenses = () => {

  const [expenses, setExpenses] = useState();
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9292/expenses")
      .then((resp) => resp.json())
      .then((data) => setExpenses(data));
  }, []);

  if (!expenses) {
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
      <AddExpense
        expenses={expenses}
        setExpenses={setExpenses}
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Expense</StyledTableCell>
              <StyledTableCell align="right">Monthly Cost</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ minWidth: 500 }}>
            {expenses.map((expense) => (
              <StyledTableRow key={expense.id}>
                <StyledTableCell align="left">{expense.name}✏️</StyledTableCell>
                <StyledTableCell align="right">
                  ${expense.monthlyCost}✏️
                </StyledTableCell>
                <StyledTableCell align="right"><button>x</button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Expenses;