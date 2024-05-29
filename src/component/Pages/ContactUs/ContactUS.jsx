import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ContactBG from "../../Common/assets/Images/About/About_BG.jpg";
import { Formik } from "formik";
import * as yup from "yup";

let schema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Form is Required"),
  email: yup
    .string()
    .email("Please enter a valid Email ID.")
    .required("*Email ID is Required"),
  phoneNumber: yup
    .string()
    .matches(/^\d{11}$/, "Enter a valid phone number")
    .transform((value) => (value ? value?.trim() : value))
    .required("Phone Number is Required"),
  message: yup.string().required("Message is Required"),
});

export const LabelStyle = {
  fontWeight: 700,
  fontSize: "18px",
  mb: "10px",
  color: "#111928",
};

const ContactUs = () => {
  const [submitLoader, setSubmitLoader] = useState(false);
  const submitHandler = async (values) => {
    // try {
    //   setSubmitLoader(true);
    //   let url = `/participants/${id}/edit-patient`;
    //   let res: AxiosResponse = await http.patch(url, values);
    //   toastMessage("success", res.data.message);
    //   closeEditModal();
    //   refresh();
    // } catch (err) {
    //   setSubmitLoader(false);
    //   errorToastMessage(err as Error);
    // }
  };

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: "-120px", sm: "-120px", md: "-120px" },
            filter: "brightness(90%)",
            zIndex: "-1",
            width: "100%",
            height: "800px",
          }}
        >
          <img
            alt="Home"
            src={ContactBG}
            width="100%"
            style={{
              objectFit: "cover",
              height: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "70%", md: "60%", lg: "50%" },
            p: { xs: "40px 20px", sm: "60px 30px", md: "80px" },
            margin: "auto",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#ffffff",
              textAlign: "center",
              letterSpacing: "5px",
            }}
          >
            CONTACT US
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "36px", md: "48px" },
              fontWeight: 400,
              color: "#FFFFFC",
              mb: "25px",
              textAlign: "center",
            }}
          >
            Connect with us.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#FFFFFF",
              mb: "25px",
              textAlign: "center",
            }}
          >
            We can be reached via email at hello@ochahouse.com, or feel free to
            simply fill out the form below. We do our best to reply within 24
            business hours.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "20px", sm: "30px", md: "40px", lg: "80px" },
          bgcolor: "white",
          p: { xs: "40px", sm: "100px", md: "100px 80px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "30%" },
            m: "auto",
            p: { xs: "16px", md: "32px" },
            bgcolor: { xs: "#f8f8f8", md: "#ffffff" },
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#ed641a",
              letterSpacing: "5px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            CATCH US
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "48px" },
              fontWeight: 400,
              color: "#151515",
              mb: "25px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Get in touch
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#7a7a7a",
              mb: "25px",
              letterSpacing: "3px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            OUR LOCATION
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "20px" },
              fontWeight: { xs: 600, sm: 600 },
              color: "#151515",
              mb: "25px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Aradhana Tea And Snacks, Dr Homi Dastur Marg, opp. Raj Mandir Fast
            Food, Rajkot, Gujarat 360001
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#7a7a7a",
              mb: "25px",
              letterSpacing: "3px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            GIVE US A CALL
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "20px" },
              fontWeight: { xs: 400, sm: 600 },
              color: "#151515",
              mb: "25px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            +91 75750 42929
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#7a7a7a",
              mb: "25px",
              letterSpacing: "3px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            EMAIL US
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "20px" },
              fontWeight: { xs: 400, sm: 600 },
              color: "#151515",
              mb: "25px",
              textAlign: { xs: "center", md: "left" },
            }}
            noWrap
          >
            info@aradhanahospitality.com
          </Typography>
        </Box>

        <Box sx={{ width: { xs: "100%", md: "60%" } }}>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phoneNumber: "",
              email: "",
              message: "",
            }}
            validationSchema={schema}
            onSubmit={(values) => {
              submitHandler(values);
            }}
          >
            {({
              handleSubmit,
              getFieldProps,
              setFieldValue,
              values,
              errors,
              touched,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box>
                  <FormLabel sx={LabelStyle}>Enter your name</FormLabel>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 3,
                      marginY: 2,
                    }}
                  >
                    <FormControl sx={{ width: { xs: "100%", md: "50%" } }}>
                      <TextField
                        id="first-name"
                        placeholder="Name"
                        {...getFieldProps("firstName")}
                        error={
                          touched?.firstName && errors?.firstName ? true : false
                        }
                        helperText={
                          touched?.firstName && errors?.firstName
                            ? errors?.firstName
                            : " "
                        }
                      />
                    </FormControl>
                    <FormControl sx={{ width: { xs: "100%", md: "50%" } }}>
                      <TextField
                        id="last-name"
                        placeholder="Last Name"
                        {...getFieldProps("lastName")}
                        error={
                          touched?.lastName && errors?.lastName ? true : false
                        }
                        helperText={
                          touched?.lastName && errors?.lastName
                            ? errors?.lastName
                            : " "
                        }
                      />
                    </FormControl>
                  </Box>
                </Box>
                <Box>
                  <FormLabel sx={LabelStyle}>Personal info</FormLabel>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 3,
                      marginY: 2,
                    }}
                  >
                    <FormControl sx={{ width: { xs: "100%", md: "50%" } }}>
                      <TextField
                        id="phoneNumber"
                        placeholder="Phone"
                        {...getFieldProps("phoneNumber")}
                        error={
                          touched?.phoneNumber && errors?.phoneNumber
                            ? true
                            : false
                        }
                        helperText={
                          touched?.phoneNumber && errors?.phoneNumber
                            ? errors?.phoneNumber
                            : " "
                        }
                      />
                    </FormControl>
                    <FormControl sx={{ width: { xs: "100%", md: "50%" } }}>
                      <TextField
                        id="email"
                        placeholder="Email"
                        {...getFieldProps("email")}
                        error={touched?.email && errors?.email ? true : false}
                        helperText={
                          touched?.email && errors?.email ? errors?.email : " "
                        }
                      />
                    </FormControl>
                  </Box>
                </Box>
                <FormControl
                  sx={{
                    width: "100%",
                  }}
                >
                  <FormLabel sx={LabelStyle} htmlFor="message">
                    Message
                  </FormLabel>
                  <TextField
                    id="message"
                    multiline
                    sx={{ marginY: 2 }}
                    placeholder="Message"
                    {...getFieldProps("message")}
                    error={touched?.message && errors?.message ? true : false}
                    helperText={
                      touched?.message && errors?.message
                        ? errors?.message
                        : " "
                    }
                  />
                </FormControl>

                <Box sx={{ mt: 1, display: "flex", gap: 2 }}>
                  {!submitLoader ? (
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        bgcolor: "#ED641A",
                        borderRadius: "5px",
                        width: {
                          xs: "160px",
                          sm: "180px",
                          md: "200px",
                          lg: "220px",
                        },
                        fontSize: {
                          xs: "16px",
                          lg: "20px",
                        },
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: "#d75f1e",
                        },
                      }}
                    >
                      Send
                    </Button>
                  ) : (
                    <CircularProgress size={25} />
                  )}
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
