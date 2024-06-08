// import { Box, Typography } from "@mui/material";
// import React from "react";
// import BlogCard from "./BlogCard";

// const Blog = () => {
//   return (
//     <Box sx={{ bgcolor: "#baa98f", position: "relative", top: "-140px" }}>
//       <Box
//         sx={{
//           width: { xs: "90%", md: "60%" },
//           m: "auto",
//           pt: "240px",
//           mb: 6,
//         }}
//       >
//         <Typography
//           sx={{
//             textAlign: "center",
//             fontSize: "16px",
//             fontWeight: "600",
//             color: "#ed641a",
//             mb: 2,
//           }}
//         >
//           OUR BLOG
//         </Typography>
//         <Typography
//           sx={{
//             textAlign: "center",
//             fontSize: "40px",
//             fontWeight: "400",
//             color: "#151515",
//           }}
//         >
//           OUR BLOG More than a Cup of Tea. Discover the world of tea from out
//           insight
//         </Typography>
//       </Box>
//       <Box
//         sx={{
//           m: "auto",
//           display: "grid",
//           gridTemplateColumns: {
//             sm: "repeat(1, 1fr)",
//             md: "repeat(2, 1fr)",
//             lg: "repeat(3, 1fr)",
//           },
//           gap: 2,
//           justifyItems: "center",
//         }}
//       >
//         <BlogCard />
//         <BlogCard />
//         <BlogCard />
//       </Box>
//     </Box>
//   );
// };

// export default Blog;

import { Box, Typography } from "@mui/material";
import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <Box
      sx={{
        bgcolor: "#baa98f",
        // position: "relative",
        // top: "-140px",
        marginTop: "-140px",
        pb: "100px",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "60%" },
          m: "auto",
          pt: { xs: "140px", md: "240px" },
          mb: 6,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "600",
            color: "#ed641a",
            mb: 2,
          }}
        >
          OUR BLOG
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: "400",
            color: "#151515",
            mb: 2,
          }}
        >
          OUR BLOG More than a Cup of Tea. Discover the world of tea from our
          insight
        </Typography>
      </Box>
      <Box
        sx={{
          m: "auto",
          display: "grid",
          gridTemplateColumns: {
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          },
          gap: 2,
          justifyItems: "center",
        }}
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Box>
    </Box>
  );
};

export default Blog;
