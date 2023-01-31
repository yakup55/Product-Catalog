import { Button, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { deleteUsingStatus, getUsingStatusList } from "../../redux/actions/usingStatusActions";
import DeleteIcon from "@mui/icons-material/Delete";
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
export default function AdminUsingStatusList() {
    const {usings}=useSelector((state)=>state.using)
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const handleUsingStatusDeleted = (id) => {
    dispacth(deleteUsingStatus(id));
    dispacth(
      openSnacbar({
        message: "has been deleted",
        severity: "success",
      })
    );
  };
  useEffect(()=>{
    dispacth(getUsingStatusList())
  },[])
  return (
    <Container maxWidth="sm">
        <TableContainer>
<Button startIcon={<BorderColorIcon></BorderColorIcon>} variant="contained" onClick={()=>navigate("/adminusingstatusadd")}>Using Status Add</Button>
            <TableBody>
                <Table>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                    {usings.map((using)=>(
                        <TableRow>
                            <TableCell>{using.usingStatusId}</TableCell>
                            <TableCell>{using.name}</TableCell>
                            <TableCell><Button startIcon={<BuildCircleIcon></BuildCircleIcon>} variant="contained" color="success" onClick={()=>navigate(`/adminupdateusingstatus/${using.usingStatusId}`)}>Update</Button></TableCell>
                            <TableCell><Button startIcon={<DeleteIcon></DeleteIcon>} variant="contained" color="error" onClick={()=>handleUsingStatusDeleted(using.usingStatusId)}>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </Table>
            </TableBody>
        </TableContainer>
    </Container>
  );
}
