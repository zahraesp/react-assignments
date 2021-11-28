import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import PostItem from "./PostItem";
import { IPost } from "../../Interfaces/Interface";
import Config from "../../Api/Config";
import { usePost } from "../../Contexts/PostProvider";
import NewPost from "./NewPost";
import { useAuth } from "../../Contexts/AuthProvider";

interface IProps {
  posts: IPost[];
  readMoreHandle: (post: IPost) => void;
  isLoading: boolean;
}

const Posts = (props: IProps) => {
  const { posts, readMoreHandle, isLoading } = props;

  const [editedPost, setEditedPost] = useState<IPost>();
  const [deletedPost, setDeletedPost] = useState<number>();
  const [newPost, setNewPost] = useState<IPost>();
  const { postsContext }: any = usePost();
  const { setPostsContext }: any = usePost();
  const Auth = useAuth();

  let userIndex = "1";
  const item = window.localStorage.getItem("user");
  if (item !== null) {
    userIndex = JSON.parse(item).id;
  }

  let randomId = Math.floor(Math.random() * 10 + 100);

  const editHandle = (post: IPost) => {
    let updatePost = postsContext.map((postItem: IPost) => {
      if (postItem.id === post.id) {
        postItem.body = post.body;
        postItem.title = post.title;
      }
      return postItem;
    });
    setPostsContext(updatePost);
    console.log("edited", post);
    setEditedPost(post);
  };

  const deleteHandle = (post: IPost) => {
    let updatePost = postsContext.filter(
      (postItem: IPost) => postItem.id !== post.id
    );
    setPostsContext(updatePost);
    setDeletedPost(post.id);
  };

  const addHandle = (post: IPost) => {
    console.log(post);
    setPostsContext((prevPost: IPost[]) => {
      return [
        ...prevPost,
        {
          id: randomId,
          userId: userIndex,
          title: post.title,
          body: post.body,
        },
      ];
    });
    setNewPost({
      id: randomId,
      userId: parseInt(userIndex),
      title: post.title,
      body: post.body,
    });
  };

  useEffect(() => {
    Config.put(`posts/${parseInt(userIndex)}`, editedPost).then((res: any) => {
      console.log("put method:", res);
    });
  }, [userIndex, editedPost]);

  useEffect(() => {
    Config.delete(`posts/${deletedPost}`);
  }, [deletedPost]);

  useEffect(() => {
    Config.post(`posts`, { newPost }).then((res: any) => {
      console.log("post method:", res);
    });
  }, [newPost]);

  //filter posts based on user random id generate

  // useEffect(() => {
  //   const upadatedPosts = postsContext.filter(
  //     (item: any) => item.userId === parseInt(userIndex)
  //   );
  //   setfilteredPosts(upadatedPosts);
  // }, [postsContext, userIndex]);

  console.log(parseInt(userIndex));

  return (
    <Box>
      {!!isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {!!Auth.isLoggedIn && <NewPost addPost={addHandle} />}
          {postsContext.map((post: IPost) => (
            <PostItem
              post={post}
              key={post.id}
              onEditHandler={editHandle}
              onDeleteHandler={deleteHandle}
              onReadMoreHandler={readMoreHandle}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Posts;
