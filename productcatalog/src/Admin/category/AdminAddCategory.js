import { Button, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { addCategory } from "../../redux/actions/categoryActions";
import { validationSchema } from "./validationSchema";
export default function AdminAddCategory() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, errors, touched, handleBlur } = useFormik(
    {
      initialValues: {
        categoryName: "",
      },
      onSubmit: (values) => {
        dispacth(addCategory(values));
        dispacth(
          openSnacbar({
            message: `${values.categoryName} has been created`,
            severity: "success",
          })
        );
        navigate("/admincategorylist");
      },
      validationSchema,
    }
  );
  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              id="categoryName"
              name="categoryName"
              label="Category Name"
              placeholder="Category Name"
              error={errors.categoryName && touched.categoryName}
              helperText={
                errors.categoryName && touched.categoryName
                  ? errors.categoryName
                  : ""
              }
              onBlur={handleBlur}
              onChange={handleChange}
            ></TextField>
            <Button type="submit" variant="contained" color="success">
              Ekle
            </Button>
          </Stack>
        </form>
      </Container>
    </div>
  );
}
