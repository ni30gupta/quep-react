import axios from "axios";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

const UserPage = () => {
  const [rows, setRows] = React.useState(null);
  const user = useContext(userContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (user.role !== "Admin") {
      navigate("/home");
    }
  }, []);
  React.useEffect(() => {
    axios.get("/users").then((res) => setRows(res.data));
    console.log(rows);
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow variant="dark">
              <TableCell>User Name</TableCell>
              <TableCell align="right">E-mail</TableCell>
              <TableCell align="right">Mobile No.</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.mobile}</TableCell>
                <TableCell align="right">{row.password}</TableCell>
                <TableCell align="right">{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserPage;
