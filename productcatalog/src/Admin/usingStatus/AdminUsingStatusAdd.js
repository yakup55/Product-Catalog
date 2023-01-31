import { Button, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { addUsingStatus } from "../../redux/actions/usingStatusActions";
import { validationSchema } from "./validationSchema";
export default function AdminUsingStatusAdd() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        name: "",
      },
      onSubmit: (values) => {
        dispacth(addUsingStatus(values));
        dispacth(
          openSnacbar({
            message: `${values.name} has been created`,
            severity: "success",
          })
        );
        navigate("/adminusingstatuslist");
      },
      validationSchema,
    });
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="name"
            name="name"
            label="Name"
            placeholder="Name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name && touched.name}
            helperText={errors.name && touched.name ? errors.name : ""}
          ></TextField>
          <Button variant="contained" type="submit">
            Add Using Status
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
