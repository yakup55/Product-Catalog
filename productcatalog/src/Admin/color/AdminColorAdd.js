import { Button, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { addColor } from "../../redux/actions/colorActions";
import { validationSchema } from "./validationSchema";
export default function AdminColorAdd() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        colorName: "",
      },
      onSubmit: (values) => {
        dispath(addColor(values));
        dispath(
          openSnacbar({
            message: `${values.colorName} hass been created`,
            severity: "success",
          })
        );
        navigate("/admincolorlist");
      },
      validationSchema,
    });
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="colorName"
            name="colorName"
            label="Color Name"
            placeholder="Color Name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.colorName && touched.colorName}
            helperText={
              errors.colorName && touched.colorName ? errors.colorName : ""
            }
          ></TextField>
          <Button type="submit" variant="contained">
            Add Color
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
