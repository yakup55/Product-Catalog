import { Button, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { addBrand } from "../../redux/actions/brandActions";
import {validationSchema} from "./validationSchema"
export default function AdminBrandAdd() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        brandName: "",
      },
      onSubmit: (values) => {
        dispacth(addBrand(values));
        dispacth(
          openSnacbar({
            message: `${values.brandName} has been created`,
            severity: "success",
          })
        );
        navigate("/adminbrandlist")
      },
      validationSchema
    });
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="brandName"
            name="brandName"
            label="Brand Name"
            placeholder="Brand Name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.brandName && touched.brandName}
            helperText={
              errors.brandName && touched.brandName ? errors.brandName : ""
            }
          ></TextField>
          <Button type="submit" variant="contained">
            Add Brand
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
