import * as React from "react";
import { useState } from "react";
import AddMoneyTrackerItem from "./AddMoneyTrackerItem";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./App.css";
import EditMoneyTrackerItem from "./EditMoneyTrackerItem";

const MoneyTracker = ({ users, setUsers, selectedUserId, selectedUser, setSelectedUser }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);

  let id = parseInt(selectedUserId);

  function handleDeleteClick(e) {
    fetch(`http://localhost:9292/items/${e.target.id}`, {
      method: "DELETE",
    });
    handleDeleteItem(e.target.id);
  }

  function handleDeleteItem(targetId) {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        const userToUpdate = { ...user };
        userToUpdate.items.filter((item) => item.id !== targetId);
        return userToUpdate
      }else{
        return user
      }
    });
    setUsers(updatedUsers);
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
        Add Item
      </button>
      <AddMoneyTrackerItem
        users={users}
        selectedUserId={selectedUserId}
        setUsers={setUsers}
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <br></br>
            <br></br>
            <TableRow>
              <StyledTableCell align="left">Edit</StyledTableCell>
              <StyledTableCell align="left">Item</StyledTableCell>
              <StyledTableCell align="center">Cost</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ minWidth: 500 }}>
            {selectedUser.items.map((item) => {
              return (
                <StyledTableRow key={item.id}>
                  <StyledTableCell
                    className="cursor"
                    align="left"
                    id={item.id}
                    onClick={() => {
                      setEditPopup(true);
                    }}
                  >
                    ✏️
                  </StyledTableCell>
                  <StyledTableCell align="left">{item.name}</StyledTableCell>
                  <StyledTableCell align="center">${item.cost}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.category}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.date}</StyledTableCell>
                  <StyledTableCell align="right">
                    <button id={item.id} onClick={handleDeleteClick}>
                      x
                    </button>
                  </StyledTableCell>
                  <EditMoneyTrackerItem
                    ItemId={item}
                    selectedUserId={selectedUserId}
                    setSelectedUser={setSelectedUser}
                    user={users}
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

export default MoneyTracker;
