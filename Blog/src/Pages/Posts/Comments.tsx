import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { IComment } from "../../Interfaces/Interface";

const Comments = (props: any) => {
  const { comments } = props;

  console.log(comments);
  return (
    <Box>
      {comments.map((comment:IComment) => {
        <Card
          sx={{
            maxWidth: "85%",
            my: "1rem",
            width: "80%",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {comment.name}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {comment.email}
            </Typography>
          </CardContent>
        </Card>;
      })}
    </Box>
  );
};

export default Comments;
