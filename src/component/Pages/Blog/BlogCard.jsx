import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import blog1 from "../../Common/assets/Images/Blog/blog_1.jpg";
import blog2 from "../../Common/assets/Images/Blog/blog_2.jpg";
import blog3 from "../../Common/assets/Images/Blog/blog_3.jpg";
import { Link } from "react-router-dom";

const BlogCard = ({ title, image, redirect }) => {
  useEffect(() => {
    console.log("first", title, image, redirect);
  }, []);
  return (
    <a href={redirect} style={{ textDecoration: "none" }}>
      <Box sx={{ width: { xs: "300px", sm: "380px", xl: "400px" } }}>
        <div class="blog-image-container">
          <img
            alt={"Blog 1"}
            src={image}
            width={"100%"}
            className="blog-image"
          />
        </div>
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "700",
            color: "#151515",
            mt: "20px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "400", color: "#151515" }}
        >
          Being and staying well is on everyone's mind right now considering the
          crazy times we live in with the global
        </Typography>
        <Link
          style={{
            fontSize: { xs: "18px", sm: "20px", md: "24px" },
            fontWeight: "700",
            color: "#ED641A",
          }}
          to={redirect}
        >
          Read more
        </Link>
      </Box>
    </a>
  );
};

export default BlogCard;
