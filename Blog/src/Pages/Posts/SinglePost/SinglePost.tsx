import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Config from "../../../Api/Config";
import { usePost } from "../../../Contexts/PostProvider";
import { IComment } from "../../../Interfaces/Interface";
import Comments from "./Comments";

const SinglePost = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { postsContext }: any = usePost();

  useEffect(() => {
    async function getComments() {
      try {
        const result = await Config.get(`posts/${postsContext.id}/comments`);
        setIsLoading(false);
        setComments(result.data);
        toast.success("comments are loaded")
      } catch (error) {
        toast.error("Something Was Wrong!");
      }
    }
    getComments();
  }, [postsContext]);

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
            {postsContext.title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {postsContext.body}
          </Typography>
        </CardContent>
      </Card>
      <Typography variant="h4">Comments:</Typography>
      {!isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            m: "1rem 0 3rem",
            width: "100%",
          }}
        >
          {comments.map((comment: IComment) => (
            <Comments comment={comment} key={comment.id} />
          ))}
        </Box>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default SinglePost;
