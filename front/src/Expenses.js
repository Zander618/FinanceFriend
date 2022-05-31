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
import AddExpense from "./AddExpense";
import EditExpense from "./EditExpense";

const Expenses = ({ users, setUsers, selectedUserId, selectedUser, setSelectedUser }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);

  let id = parseInt(selectedUserId);

  function handleDeleteClick(e) {
    fetch(`http://localhost:9292/expenses/${e.target.id}`, {
      method: "DELETE",
    });
    handleDeleteExpense(e.target.id);
  }

  const handleDeleteExpense = (targetId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        const userExpenseToUpdate = { ...user };
        userExpenseToUpdate.expenses.filter((expense) => expense.id !== targetId);
        console.log("DELETE", userExpenseToUpdate);
        console.log("Tarrget IDDD", targetId)
        return userExpenseToUpdate
      }else{
        return user
      }
    });
    setUsers(updatedUsers);
    console.log("Updated USERSSSSSS", updatedUsers)
  };

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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          setButtonPopup(true);
        }}
      >
        Add Expense
      </button>
      <AddExpense
        users={users}
        setUsers={setUsers}
        selectedUserId={selectedUserId}
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Edit</StyledTableCell>
              <StyledTableCell align="left">Expense</StyledTableCell>
              <StyledTableCell align="right">Monthly Cost</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ minWidth: 500 }}>
            {selectedUser.expenses.map((expense) => {
              return (
                <StyledTableRow key={expense.id}>
                  <StyledTableCell
                    className="cursor"
                    align="left"
                    id={expense.id}
                    onClick={() => {
                      setEditPopup(true);
                    }}
                  >
                    ✏️
                  </StyledTableCell>
                  <StyledTableCell align="left">{expense.name}</StyledTableCell>
                  <StyledTableCell align="right">
                    ${expense.monthly_cost}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <button onClick={handleDeleteClick} id={expense.id}>
                      x
                    </button>
                  </StyledTableCell>
                  <EditExpense
                    expenseId={expense.id}
                    user={users}
                    selectedUserId={selectedUserId}
                    setSelectedUser={setSelectedUser}
                    setUsers={setUsers}
                    trigger={editPopup}
                    setTrigger={setEditPopup}
                  />
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Expenses;
