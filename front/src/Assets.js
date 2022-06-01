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
import "./App.css";
import EditAsset from "./EditAsset";

const Assets = ({
  users,
  setSelectedUser,
  selectedUserId,
  selectedUser,
  setUsers,
}) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [popUpId, setPopUpId] = useState();

  let id = parseInt(selectedUserId);

  function handleDeleteClick(e) {
    fetch(`http://localhost:9292/assets/${e.target.id}?user_id=${id}`, {
      method: "DELETE",
    });
    handleDeleteAsset(e.target.id);
  }

  const handleDeleteAsset = (targetId) => {
    let updatedAttributes;
    const updatedUser = users.map((user) => {
      if (user.id === id) {
        const userToUpdate = { ...user };
        updatedAttributes = userToUpdate.assets.filter(
          (asset) => asset.id !== parseInt(targetId)
        );
        console.log("User To Update", userToUpdate);
        console.log("Tarrget IDDD", targetId);
        userToUpdate.assets = updatedAttributes;
        setSelectedUser(userToUpdate);
        return userToUpdate;
      } else {
        return user;
      }
    });
    setUsers(updatedUser);
    console.log("Updated USERSSSSSS", updatedUser);
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

  let sum = 0;
  selectedUser.assets.map((asset) => {
    sum += asset.estimated_value;
    return sum;
  });
  console.log("SUMMMMMM", sum);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1> Your Net Worth is ${sum}</h1>
      <button
        onClick={() => {
          setButtonPopup(true);
        }}
      >
        Add Asset
      </button>
      <AddAsset
        users={users}
        setUsers={setUsers}
        trigger={buttonPopup}
        selectedUserId={selectedUserId}
        setTrigger={setButtonPopup}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <br></br>
            <br></br>
            <TableRow>
              <StyledTableCell align="left">Edit</StyledTableCell>
              <StyledTableCell align="left">Asset</StyledTableCell>
              <StyledTableCell align="center">Date Purchased</StyledTableCell>
              <StyledTableCell align="right">Estimated Value</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ minWidth: 500 }}>
            {selectedUser.assets.map((asset) => {
              return (
                <StyledTableRow key={asset.id}>
                  <StyledTableCell
                    className="cursor"
                    align="left"
                    id={asset.id}
                    onClick={(e) => {
                      setPopUpId(parseInt(e.target.id));
                      setEditPopup(true);
                    }}
                  >
                    ✏️
                  </StyledTableCell>
                  <StyledTableCell align="left">{asset.name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {asset.date_purchased}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    ${asset.estimated_value}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <button id={asset.id} onClick={handleDeleteClick}>
                      x
                    </button>
                  </StyledTableCell>
                  {asset.id === popUpId && (
                    <EditAsset
                      assetId={asset}
                      users={users}
                      selectedUserId={selectedUserId}
                      setSelectedUser={setSelectedUser}
                      setUsers={setUsers}
                      trigger={editPopup}
                      setTrigger={setEditPopup}
                    />
                  )}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Assets;
