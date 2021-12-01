import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import PostItem from "./PostItem";
import { IPost } from "../../../Interfaces/Interface";
import Config from "../../../Api/Config";
import { useAuth } from "../../../Contexts/AuthProvider";
import NewPost from "../NewPost/NewPost";
import { toast } from "react-toastify";

interface IProps {
  fetchPosts: IPost[];
  isLoading: boolean;
}
const Posts = (props: IProps) => {
  const { fetchPosts, isLoading } = props;
  const [posts, setPosts] = useState<IPost[]>([]);
  const Auth = useAuth();

  let userIndex = "1";
  const item = window.localStorage.getItem("user");
  if (item !== null) {
    userIndex = JSON.parse(item).id;
  }
  let randomId = Math.floor(Math.random() * 10 + 100);

  useEffect(() => {
    setPosts(fetchPosts);
  }, [fetchPosts]);

  async function editHandle(post: IPost) {
    try {
      let updatePost = posts.map((postItem: IPost) => {
        if (postItem.id === post.id) {
          postItem.body = post.body;
          postItem.title = post.title;
        }
        return postItem;
      });
      const result = await Config.put(`posts/${parseInt(userIndex)}`, post);
      setPosts(updatePost);
      console.log("PUT method:", result.data);
      toast.success("Post Was Edited.");
    } catch (error) {
      toast.error("Something Wrong!!");
    }
  }

  async function deleteHandle(post: IPost) {
    try {
      let updataPost = posts.filter(
        (postItem: IPost) => postItem.id !== post.id
      );
      setPosts(updataPost);
      const result = await Config.delete(`posts/${post.id}`);
      console.log("DELETE method:", result.data);
      toast.success("Post Was Deleted.");
    } catch (error) {
      toast.error("Something Wrong!!");
    }
  }

  async function addHandle(post: IPost) {
    try {
      const result = await Config.post(`posts`, {
        id: randomId,
        userId: parseInt(userIndex),
        title: post.title,
        body: post.body,
      });
      setPosts((prevPost: IPost[]) => {
        return [
          {
            id: randomId,
            //id: result.data.id,
            userId: parseInt(userIndex),
            title: result.data.title,
            body: result.data.body,
          },
          ...prevPost,
        ];
      });
      console.log("POST method:", result.data);
      toast.success("New Post Was Added.");
    } catch (error) {
      toast.error("Something Wrong!!");
    }
  }
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
          {posts.map((post: IPost) => (
            <PostItem
              post={post}
              key={post.id}
              onEditHandler={editHandle}
              onDeleteHandler={deleteHandle}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Posts;
