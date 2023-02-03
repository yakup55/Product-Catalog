import { Button, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { updateDetail } from "../../redux/actions/detailActions";
import DetailService from "../../services/detailService";
import { validationSchema } from "./validationSchema";
export default function AdminUpdateDetail() {
  const { id } = useParams();
  const detailService = new DetailService();
  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    detailService.getOneDetail(id).then((resp) => setValues(resp));
  }, []);
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
      detailExplanation: "",
      productId: 0,
    },
    onSubmit: (values) => {
      dispacth(updateDetail(values, id));
      dispacth(
        openSnacbar({
          message: `${values.productId} has been updated`,
          severity: "success",
        })
      );
      navigate("/admindetaillist");
    },
    validationSchema,
  });
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="detailExplanation"
            name="detailExplanation"
            label="Detail Explanation"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.detailExplanation && touched.detailExplanation}
            helperText={
              errors.detailExplanation && touched.detailExplanation
                ? errors.detailExplanation
                : ""
            }
            value={values.detailExplanation}
          ></TextField>
          <TextField
            id="productId"
            name="productId"
            label="Product Id"
            error={errors.productId && touched.productId}
            helperText={
              errors.productId && touched.productId ? errors.productId : ""
            }
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.productId}
          ></TextField>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
