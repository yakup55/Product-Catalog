import { Button, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin, UserRegister } from "../../redux/actions/userActions";
import { validationSchema } from "./validationSchema";
import { openSnacbar } from "../../redux/actions/appActions";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        phoneNumber: "",
        role: "",
      },
      onSubmit: (values) => {
        dispacth(UserRegister(values));
        dispacth(
          openSnacbar({
            message: "Kayıt Başarılı",
            severity: "success",
          })
        );
        navigate("/");
      },

      validationSchema,
    });
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            color="success"
            id="firstName"
            name="firstName"
            label="Adınızı Giriniz"
            placeholder="Adınızı Giriniz"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.firstName && touched.firstName}
            helperText={
              errors.firstName && touched.firstName ? errors.firstName : ""
            }
          ></TextField>
          <TextField
            name="lastName"
            id="lastName"
            color="success"
            label="Soyadınızı Giriniz"
            placeholder="Soyadınızı Giriniz"
            error={errors.lastName && touched.lastName}
            helperText={
              errors.lastName && touched.lastName ? errors.lastName : ""
            }
            onChange={handleChange}
            onBlur={handleBlur}
          ></TextField>
          <TextField
            id="userName"
            name="userName"
            label="Kullanıcı Adınız"
            placeholder="Kullanıcı Adınız"
            error={errors.userName && touched.userName}
            helperText={
              errors.userName && touched.userName ? errors.userName : ""
            }
            onChange={handleChange}
            onBlur={handleBlur}
          ></TextField>
          <TextField
            color="success"
            id="email"
            name="email"
            label="Email Adresiniz"
            placeholder="Email Adresiniz"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            helperText={errors.email && touched.email ? errors.email : ""}
          ></TextField>
          <TextField
            color="success"
            id="password"
            name="password"
            label="Şifrenizi Giriniz"
            placeholder="Şifrenizi Giriniz"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password && touched.password}
            helperText={
              errors.password && touched.password ? errors.password : ""
            }
          ></TextField>
          <Button type="submit" variant="contained">
            Kayıt Ol
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
