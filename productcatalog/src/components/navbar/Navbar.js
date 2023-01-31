import { Link } from "@chakra-ui/react";
import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./styless.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import { logOut } from "../../redux/actions/userActions";
import { openSnacbar } from "../../redux/actions/appActions";
export default function Navbar() {
  const dispacth = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const LogOut = () => {
    dispacth(logOut());
    dispacth(
      openSnacbar({
        message: "LogOut Success",
        severity: "success",
      })
    );
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link onClick={() => navigate("/")}>Product Catalog</Link>
        </div>
      </div>
      {user.userId === "" && (
        <div className={styles.rigth}>
          <Link onClick={() => navigate("/sigin")}>
            <Button startIcon={<LoginIcon></LoginIcon>} variant="contained">
              Login
            </Button>
          </Link>
          <Link onClick={() => navigate("/sinup")}>
            <Button
              startIcon={<HowToRegIcon></HowToRegIcon>}
              variant="contained"
            >
              Register
            </Button>
          </Link>
        </div>
      )}

      {user.userId !== "" && (
        <div className={styles.rigth}>
          {user.userId === "7acde6d7-dff9-45dd-9e0f-d8cdb5eb5560" && (
            <Link onClick={() => navigate("/admin")}>
              <Button
                startIcon={<AccountCircleIcon></AccountCircleIcon>}
                variant="contained"
              >
                Profilim
              </Button>
            </Link>
          )}
          {user.userId != "7acde6d7-dff9-45dd-9e0f-d8cdb5eb5560" && (
            <Link onClick={() => navigate("/user")}>
              <Button
                startIcon={<AccountCircleIcon></AccountCircleIcon>}
                variant="contained"
              >
                Profilim
              </Button>
            </Link>
          )}
          <Link onClick={() => navigate("/")}>
            <Button
              startIcon={<LogoutIcon></LogoutIcon>}
              onClick={() => LogOut()}
              variant="contained"
            >
              Çıkış Yap
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
