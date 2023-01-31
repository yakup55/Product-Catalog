import { Link } from "@chakra-ui/react";
import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./styless.module.css";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
export default function Navbar() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
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
            <Button startIcon={<LoginIcon></LoginIcon>} variant="contained">Login</Button>
          </Link>
          <Link onClick={() => navigate("/sinup")}>
            <Button startIcon={<HowToRegIcon></HowToRegIcon>} variant="contained">Register</Button>
          </Link>
        </div>
      )}

      {user.userId !== "" && (
        <div className={styles.rigth}>
          <Link onClick={() => navigate("/user")}>
            <Button startIcon={<AccountCircleIcon></AccountCircleIcon>} variant="contained">Profilim</Button>
          </Link>
          <Link onClick={() => navigate("/")}>
            <Button startIcon={<LogoutIcon></LogoutIcon>} onClick={() => user.userId === ""} variant="contained">
              Çıkış Yap
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
