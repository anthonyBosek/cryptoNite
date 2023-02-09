import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setRegister } from "state";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  location: yup.string().required("Location is required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isRegister = useSelector((state) => state.register);

  const register = async (values, onSubmitProps) => {
    const data = { ...values, accounts: [] }; // add empty accounts array

    const savedUserResponse = await axios({
      method: "POST",
      url: "http://localhost:5000/auth/register",
      data,
    });
    const savedUser = await savedUserResponse.data;
    onSubmitProps.resetForm();

    if (savedUser) {
      dispatch(setRegister(false));
    }
  };

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await axios({
      method: "POST",
      url: "http://localhost:5000/auth/login",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.data;
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/user");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isRegister) await register(values, onSubmitProps);
    else await login(values, onSubmitProps);
  };

  return (
    <Box m="20px">
      {isRegister ? (
        <Header title="Register" subtitle="New CryptoNite Profile" />
      ) : (
        <Header title="Login" subtitle="Existing CryptoNite Member" />
      )}

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={isRegister ? initialValuesRegister : initialValuesLogin}
        validationSchema={isRegister ? registerSchema : loginSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              {isRegister && (
                <>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{ gridColumn: "span 2" }}
                  />

                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{ gridColumn: "span 2" }}
                  />

                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Location"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.location}
                    name="location"
                    error={!!touched.location && !!errors.location}
                    helperText={touched.location && errors.location}
                    sx={{ gridColumn: "span 4" }}
                  />
                </>
              )}

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>

            {/* BUTTONS */}
            <Box display="flex" justifyContent="space-between" mt="20px">
              <Button type="submit" color={"secondary"} variant="contained">
                {isRegister
                  ? "Register CryptoNite Profile"
                  : "Login CryptoNite Member"}
              </Button>
              <Typography
                variant="h5"
                mr="20px"
                onClick={() => {
                  dispatch(setRegister(isRegister ? false : true));
                  resetForm();
                }}
                color={colors.blueAccent[400]}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    textDecoration: "underline",
                  },
                }}
              >
                {isRegister
                  ? "Login Existing CryptoNite Member"
                  : "Create New CryptoNite Profile"}
              </Typography>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
