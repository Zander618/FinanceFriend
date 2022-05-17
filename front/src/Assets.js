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
import AddAsset from "./AddAsset";

const Assets = () => {

  const [assets, setAssets] = useState();
  const [buttonPopup, setButtonPopup] = useState(false);

  // function handleDeleteClick() {
  //   fetch(`http://localhost:3001/assets/${assets.id}`, {
  //     method: "DELETE"
  //   })
  //     console.log(assets.id)
  // }

  
  useEffect(() => {
    fetch("http://localhost:3001/assets")
      .then((resp) => resp.json())
      .then((data) => setAssets(data));
  }, []);

  if (!assets) {
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
              <StyledTableCell align="left">Asset</StyledTableCell>
              <StyledTableCell align="center">Date Purchased</StyledTableCell>
              <StyledTableCell align="right">Estimated Value</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ minWidth: 500 }}>
            {assets.map((asset) => (
              <StyledTableRow key={asset.id}>
                <StyledTableCell align="left">{asset.name}✏️</StyledTableCell>
                <StyledTableCell align="center">
                  {asset.datePurchased}✏️
                </StyledTableCell>
                <StyledTableCell align="right">
                  ${asset.estimatedValue}✏️
                </StyledTableCell>
                <StyledTableCell><button>x</button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Assets;
