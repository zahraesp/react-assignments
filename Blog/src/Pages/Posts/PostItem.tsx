import {  Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../../Contexts/AuthProvider";
import { IPost } from "../../Interfaces/Interface";
import ButtonGroup from "./ButtonGroup";

interface IProps {
  post: IPost;
  onEditHandler: (post: IPost) => void;
  onDeleteHandler: (post: IPost) => void;
  onReadMoreHandler: (post: IPost) => void;
}

const PostItem = (props: IProps) => {
  const { post, onEditHandler, onDeleteHandler, onReadMoreHandler } = props;
  const Auth = useAuth();

  return (
    <Card
      sx={{
        maxWidth: "85%",
        my: "1rem",
        width: "80%",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      {!!Auth.isLoggedIn && (
        <ButtonGroup
          post={post}
          editedPost={onEditHandler}
          deletedPost={onDeleteHandler}
          ReadMorePost={onReadMoreHandler}
        />
      )}
    </Card>
  );
};

export default PostItem;
