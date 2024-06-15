import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const data = [
    {
      id: 1,
      title: "How Tea Can Help You Stay Motivated This Winter",
      imageUrl:
        "https://aradhanahospitality.com/demo/wp-content/uploads/2024/04/help-413x250-1.jpg",
      redirectLink:
        "https://aradhanahospitality.com/demo/2024/04/09/how-tea-can-help-you-stay-motivated-this-winter/",
    },
    {
      id: 2,
      title: "3 Reasons We Are Obsessed with Yerba Mate Tea",
      imageUrl:
        "https://aradhanahospitality.com/demo/wp-content/uploads/2024/04/yerba-413x250-1.jpg",
      redirectLink:
        "https://aradhanahospitality.com/demo/2024/04/09/3-reasons-we-are-obsessed-with-yerba-mate-tea/",
    },
    {
      id: 3,
      title: "Five Reasons to Drink Green Tea Daily",
      imageUrl:
        "https://aradhanahospitality.com/demo/wp-content/uploads/2024/04/reasons-to-drink-413x250-1.jpg",
      redirectLink:
        "https://aradhanahospitality.com/demo/2024/04/09/five-reasons-to-drink-green-tea-daily/",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box
      sx={{
        bgcolor: "#baa98f",
        // position: "relative",
        // top: "-140px",
        marginTop: "-140px",
        pt: "140px",
        p: { lg: "200px 200px" },
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "60%" },
          m: "auto",
          // pt: { xs: "140px", md: "240px" },
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
          justifyItems: "center",
          padding: "0 50px",
        }}
      >
        {data.map((d) => {
          console.log(d);
          return (
            <BlogCard
              key={d.id}
              title={d.title}
              image={d.imageUrl}
              redirect={d.redirectLink}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Blog;
