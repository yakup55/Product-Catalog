import { Button, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { updateUsingStatus } from "../../redux/actions/usingStatusActions";
import UsingStatusService from "../../services/usingStatusService";
import { validationSchema } from "./validationSchema";
export default function AdminUpdateUsingStatus() {
  const usingService = new UsingStatusService();
  const { id } = useParams();
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
      name: "",
    },
    onSubmit: (values) => {
      dispacth(updateUsingStatus(id, values));
      dispacth(
        openSnacbar({
          message: `${values.name} has been updated`,
          severity: "success",
        })
      );
      navigate("/adminusingstatuslist");
    },
    validationSchema,
  });
  useEffect(() => {
    usingService.getOneUsingStatus(id).then((resp) => setValues(resp));
  }, []);
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="name"
            name="name"
            label="Name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name && touched.name}
            helperText={errors.name && touched.name ? errors.name : ""}
            value={values.name}
          ></TextField>
          <Button variant="contained" type="submit">
            Save
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
