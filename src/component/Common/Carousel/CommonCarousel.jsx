import { Button, Paper } from "@mui/material";
import React from "react";

export default function CommonCarousel(props) {
  return (
    <Paper sx={{ border: 0, height: "100%" }}>
      <img
        src={props.item.imageUrl}
        width={"100%"}
        height={"100%"}
        alt={props.item.title}
        style={{ objectFit: "cover" }}
      />
    </Paper>
  );
}
