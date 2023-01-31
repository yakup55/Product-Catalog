import { Button, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { UserLogin } from "../../redux/actions/userActions";
import AuthenticationService from "../../services/authenticationService";
import { validationSchema } from "./validationSchema";
export default function Login() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const authenticationService = new AuthenticationService();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        const result = await authenticationService.login(values);
        if (result.status === 200) {
          dispacth(
            openSnacbar({
              message: "Giriş Başarılı",
              severity: "success",
            })
          );
          const resp = result.data;
          localStorage.setItem("userId", resp.userId);
          localStorage.setItem("userName", resp.userName);
          localStorage.setItem("firstName", resp.firstName);
          localStorage.setItem("lastName", resp.lastName);
          localStorage.setItem("accessToken", resp.accessToken);
          localStorage.setItem("isLogin", true);

          dispacth(
            UserLogin({
              userId: resp.userId,
              userName: resp.userName,
              firstName: resp.firstName,
              lastName: resp.lastName,
              accessToken: resp.accessToken,
              isLogin: true,
            })
          );
          navigate("/");
        }

        if (result.status === 401) {
          dispacth(
            openSnacbar({
              message: "Giriş Başarısız",
              severity: "error",
            })
          );
        }
      },
      validationSchema,
    }
  );
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
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
            Giriş Yap
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
