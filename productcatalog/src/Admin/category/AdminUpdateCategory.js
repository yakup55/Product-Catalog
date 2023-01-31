import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateCategory } from "../../redux/actions/categoryActions";
import { validationSchema } from "./validationSchema";
import CategoryService from "../../services/categoryService";
import { openSnacbar } from "../../redux/actions/appActions";

export default function AdminUpdateCategory() {
  const dispacth = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    categoryService.getOneCategory(id).then((resp) => setValues(resp));
  }, []);
  const navigate = useNavigate();
  const categoryService = new CategoryService();
  const { handleSubmit, handleChange, handleBlur,values, errors, setValues, touched } =
    useFormik({
      initialValues: {
        categoryName: "",
      },
      onSubmit: (values) => {
        dispacth(updateCategory(id, values));
        dispacth(openSnacbar({
          message:`${values.categoryName} has been updated`,
          severity:"success"
        }))
        navigate("/admincategorylist");
      },
      validationSchema,
    });
  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              id="categoryName"
              name="categoryName"
              label="Category Name"
              error={errors.categoryName && touched.categoryName}
              helperText={
                errors.categoryName && touched.categoryName
                  ? errors.categoryName
                  : ""
              }
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.categoryName}
            ></TextField>
            <Button type="submit" variant="contained" color="success">Kaydet</Button>
          </Stack>
        </form>
      </Container>
    </div>
  );
}
