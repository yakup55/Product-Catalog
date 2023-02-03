import { Button, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { addDetail } from "../../redux/actions/detailActions";
import { validationSchema } from "./validationSchema";
export default function AdminDetailAdd() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        detailExplanation: "",
        productId: 0,
      },
      onSubmit: (values) => {
        dispacth(addDetail(values));
        dispacth(
          openSnacbar({
            message: "Detail has been created",
            severity: "success",
          })
        );
        navigate("/admindetaillist");
      },
      validationSchema,
    }
  );
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="detailExplanation"
            name="detailExplanation"
            label="Detail Explanation"
            placeholder="Detail Explanation"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.detailExplanation && touched.detailExplanation}
            helperText={
              errors.detailExplanation && touched.detailExplanation
                ? errors.detailExplanation
                : ""
            }
          ></TextField>
          <TextField
            id="productId"
            name="productId"
            label="Product Id"
            placeholder="Product Id"
            error={errors.productId && touched.productId}
            helperText={
              errors.productId && touched.productId ? errors.productId : ""
            }
            onChange={handleChange}
            onBlur={handleBlur}
          ></TextField>
          <Button type="submit" variant="contained">
            Add Detail
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
