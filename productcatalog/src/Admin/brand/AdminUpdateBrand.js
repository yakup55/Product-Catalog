import { Button, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { updateBrand } from "../../redux/actions/brandActions";
import BrandService from "../../services/brandService";
import { validationSchema } from "./validationSchema";

export default function AdminUpdateBrand() {
  const { id } = useParams();
  const brandService = new BrandService();
  const navigate = useNavigate();
  const dispacth = useDispatch();
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
      brandName: "",
    },
    onSubmit: (values) => {
      dispacth(updateBrand(id, values));
      dispacth(
        openSnacbar({
          message: `${values.brandName} hass been updated`,
          severity: "success",
        })
      );
      navigate("/adminbrandlist");
    },
    validationSchema,
  });
  useEffect(() => {
    brandService.getOneBrand(id).then((resp) => setValues(resp));
  }, []);
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="brandName"
            name="brandName"
            label="Brand Name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.brandName && touched.brandName}
            helperText={
              errors.brandName && touched.brandName ? errors.brandName : ""
            }
            value={values.brandName}
          ></TextField>
          <Button type="submit" variant="contained">Save</Button>
        </Stack>
      </form>
    </Container>
  );
}
