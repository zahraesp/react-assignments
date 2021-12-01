import { Button, CardActions } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../../../Contexts/PostProvider";
import { IPost } from "../../../Interfaces/Interface";
import EditModal from "../../../Components/Modals/EditModal";

interface IProps {
  post: IPost;
  editedPost: (post: IPost) => void;
  deletedPost: (post: IPost) => void;
}

const ButtonGroup = (props: IProps) => {
  const { post, editedPost, deletedPost } = props;
  const { setPostsContext }: IPost | any = usePost();
  let navigate = useNavigate();

  const ReadMore = () => {
    navigate(`/posts/${post.id}`);
    setPostsContext(post);
  };

  const handleDelete = () => {
    deletedPost(post);
  };

  return (
    <CardActions>
      <EditModal post={post} editedPost={editedPost} />
      <Button size="small" onClick={handleDelete}>
        Delete
      </Button>
      <Button size="small" onClick={ReadMore}>
        Read More
      </Button>
    </CardActions>
  );
};

export default ButtonGroup;
