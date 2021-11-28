import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Config from "../../Api/Config";
import { IComment } from "../../Interfaces/Interface";
import Comments from "./Comments";

const SinglePost = (props: any) => {
  const { post } = props;
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    Config.get(`posts/${post.id}/comments`).then((res) => {
      setComments(res.data);
    });
  }, [post.id]);

  console.log(comments);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Card
        sx={{
          maxWidth: "85%",
          m: "1rem 0 3rem",
          width: "80%",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {post.title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.body}
          </Typography>
        </CardContent>
      </Card>
      <Comments comments={comments} />
    </Box>
  );
};

export default SinglePost;
