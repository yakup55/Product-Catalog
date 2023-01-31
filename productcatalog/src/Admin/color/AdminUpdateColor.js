import { Button, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { updateColor } from "../../redux/actions/colorActions";
import ColorService from "../../services/colorService";
import { validationSchema } from "./validationSchema";
export default function AdminUpdateColor() {
  const { id } = useParams();
  const colorService = new ColorService();
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setValues,
  } = useFormik({
    initialValues: {
      colorName: "",
    },
    onSubmit: (values) => {
      dispacth(updateColor(id, values));
      dispacth(
        openSnacbar({
          message: `${values.colorName} hass been updated`,
          severity: "success",
        })
      );
      navigate("/admincolorlist");
    },
    validationSchema,
  });
  useEffect(() => {
    colorService.getOneColor(id).then((resp) => setValues(resp));
  }, []);
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="colorName"
            name="colorName"
            label="Color Name"
            error={errors.colorName && touched.colorName}
            helperText={
              errors.colorName && touched.colorName ? errors.colorName : ""
            }
            value={values.colorName}
            onChange={handleChange}
            onBlur={handleBlur}
          ></TextField>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
