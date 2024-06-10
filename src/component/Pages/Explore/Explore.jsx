import { Box, Typography } from "@mui/material";
import React from "react";
import Teabag from "../../Common/assets/Images/Explore_Cup_with_Teabag.jpg";
import Leaves from "../../Common/assets/Images/Explore_Leaves_distribution_by_kid.jpg";
import GlowFlow from "../../Common/assets/Images/Explore_Glow_Flow_Packets.jpg";
import Cramplest from "../../Common/assets/Images/Explore_Cramplest_Box.jpg";

const Explore = () => {
  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",
        p: {
          xs: "20px",
          sm: "40px",
          md: "60px",
          lg: "120px 200px",
          xl: "120px 200px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: {
            xs: "10px",
            sm: "20px",
            md: "30px",
          },
          mb: {
            xs: "20px",
            sm: "25px",
            md: "30px",
          },
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "24px",
              sm: "32px",
              md: "40px",
            },
            color: "#ED641A",
            textAlign: {
              xs: "center",
              sm: "left",
            },
          }}
          className="heading-font"
        >
          Explore Our Products
        </Typography>
        <Box
          sx={{
            width: {
              xs: "80%",
              sm: "120px",
            },
            display: "flex",
            justifyContent: "space-between",
            mt: {
              xs: "10px",
              sm: "0",
            },
          }}
        >
          <Box sx={{ width: "90%", height: "2px", bgcolor: "#ED641A" }}></Box>
          <Box sx={{ width: "5%", height: "2px", bgcolor: "#ED641A" }}></Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "75%",
            md: "50%",
          },
          mb: {
            xs: "20px",
            sm: "25px",
          },
        }}
      >
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec
          tortor purus. Praesent elementum massa sed faucibus facilisis.
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "grid", md: "flex" },
          gap: {
            xs: "20px",
            sm: "30px",
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gap: {
              xs: "20px",
              sm: "30px",
            },
            height: { xs: "unset", md: "800px" },
            overflow: "hidden",
          }}
        >
          <Box position={"relative"}>
            <img
              alt={"Explore 1"}
              src={Teabag}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(80%)",
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "20px",
                  md: "24px",
                },
                fontWeight: "400",
                color: "#FFFFFC",
                position: "absolute",
                zIndex: "10",
                top: 25,
                left: 25,
              }}
            >
              Lorem ipsum dolor sit amet
            </Typography>
          </Box>
          <Box position={"relative"}>
            <img
              alt={"Explore 2"}
              src={Leaves}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(80%)",
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "20px",
                  md: "24px",
                },
                fontWeight: "400",
                color: "#FFFFFC",
                position: "absolute",
                zIndex: "10",
                top: 25,
                left: 25,
              }}
            >
              Lorem ipsum dolor sit amet
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gap: {
              xs: "20px",
              sm: "30px",
            },
            height: { xs: "unset", md: "800px" },
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box position={"relative"} sx={{ height: "350px" }}>
            <img
              alt={"Explore 3"}
              src={GlowFlow}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(80%)",
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "20px",
                  md: "24px",
                },
                fontWeight: "400",
                color: "#FFFFFC",
                position: "absolute",
                zIndex: "10",
                top: 25,
                left: 25,
              }}
            >
              Lorem ipsum dolor sit amet
            </Typography>
          </Box>
          <Box position={"relative"}>
            <img
              alt={"Explore 4"}
              src={Cramplest}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(80%)",
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "20px",
                  md: "24px",
                },
                fontWeight: "400",
                color: "#FFFFFC",
                position: "absolute",
                zIndex: "10",
                top: 25,
                left: 25,
              }}
            >
              Lorem ipsum dolor sit amet
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
          },
          height: "700px",
          // overflowY: "hidden",
          gap: {
            xs: "20px",
            sm: "30px",
          },
        }}
      >
        {[Teabag, Leaves, GlowFlow, Cramplest].map((image, index) => (
          <Box key={index} position={"relative"}>
            <img
              alt={`Explore ${index}`}
              src={image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(80%)",
                borderRadius: "8px",
                position: index % 2 === 1 ? "relative" : "initial",
                top: index % 2 === 1 ? "-40%" : "initial",
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "20px",
                  md: "24px",
                },
                fontWeight: "400",
                color: "#FFFFFC",
                position: "absolute",
                zIndex: "10",
                top: 25,
                left: 25,
                // position: index % 2 === 1 ? "relative" : "initial",
                top: index % 2 === 1 ? "-35%" : "5%",
              }}
            >
              Lorem ipsum dolor sit amet
            </Typography>
          </Box>
        ))}
      </Box> */}
    </Box>
  );
};

export default Explore;
