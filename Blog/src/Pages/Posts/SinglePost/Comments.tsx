import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Comments = (props: any) => {
  const { comment } = props;
  return (
    <Card
      sx={{
        maxWidth: "85%",
        my: "1rem",
        width: "80%",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#dfe1e3",
        }}
      >
        <Typography gutterBottom variant="body2" component="div">
          {comment.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {comment.email}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography>{comment.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default Comments;
