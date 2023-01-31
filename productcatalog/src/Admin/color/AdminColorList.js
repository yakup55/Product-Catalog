import {
    Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { deleteColor, getColorList } from "../../redux/actions/colorActions";
import DeleteIcon from "@mui/icons-material/Delete";
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
export default function AdminColorList() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const { colors } = useSelector((state) => state.color);
  useEffect(() => {
    dispath(getColorList());
  }, []);
  const handleColorDeleted = (id) => {
    dispath(deleteColor(id));
    dispath(
      openSnacbar({
        message: "hass been deleted",
        severity: "success",
      })
    );
  };
  return (
    <Container maxWidth="sm">
        <Button startIcon={<BorderColorIcon></BorderColorIcon>} variant="contained" onClick={()=>navigate("/admincoloradd")}>Color Add</Button>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Color Name</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {colors.map((color)=>(
                <TableRow>
                    <TableCell>{color.colorId}</TableCell>
                    <TableCell>{color.colorName}</TableCell>
                    <TableCell><Button startIcon={<BuildCircleIcon></BuildCircleIcon>} variant="contained" color="success" onClick={()=>navigate(`/adminupdatecolor/${color.colorId}`)}>Update</Button></TableCell>
                    <TableCell><Button startIcon={<DeleteIcon></DeleteIcon>} variant="contained" color="error" onClick={()=>handleColorDeleted(color.colorId)}>Delete</Button></TableCell>
                </TableRow>
            ))}
          </Table>
        </TableBody>
      </TableContainer>
    </Container>
  );
}
