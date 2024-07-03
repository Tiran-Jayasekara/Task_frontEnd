import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import axios from "axios";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useTokenStore, useUserStore } from "store";
const theme = {};

export default function SignIn() {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [emailError, setEmailError] = React.useState<boolean>(false);
  const [passwordError, setPasswordError] = React.useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState<string>("");
  const [passwordErrorMessage, setPasswordErrorMessage] =
    React.useState<string>("");

  const Login = () => {
    const userInfo = {
      email,
      password,
    };
    if (email === "") {
      setEmailError(true);
      setEmailErrorMessage("Email is required");
    } else if (password === "") {
      setPasswordError(true);
      setPasswordErrorMessage("Password is required");
    } else {
      setEmailError(false);
      setPasswordError(false);
      axios
        .post(`${process.env.REACT_APP_BASE_URL}user/login`, userInfo)
        .then((res) => {
          switch (res.data.message) {
            case "Login Successful":
              console.log(res);

              const token = res.data.data;
              const email = res.data.validuser.email;
              const password = res.data.validuser.password;
              const userData = {
                email,
                password,
              };

              useTokenStore.setState({ token: token });
              setUser(userData);
              toast.success(`Login Successfull`);
              navigate("/home");
              break;

            case "password not Match":
              toast.error(`Password Not Match`);
              setPasswordError(true);
              setPasswordErrorMessage("Password is wrong");
              break;

            case "user not Valid":
              toast.error(`user not Registerd`);
              setEmailError(true);
              setEmailErrorMessage("Email not registerd");
              break;

            default:
              break;
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />

        <Box
          sx={{
            marginTop: { xs: 10, md: 20 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            component: "section",
            "&:hover": {
              bgcolor: "#ede7f6",
            },
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" noValidate sx={{ mt: 4 }}>
            <TextField
              error={emailError}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              helperText={emailErrorMessage}
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              error={passwordError}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              helperText={passwordErrorMessage}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={Login}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
