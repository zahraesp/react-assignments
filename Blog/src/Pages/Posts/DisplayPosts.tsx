import React, { useEffect, useState } from "react";
import Config from "../../Api/Config";
import { usePost } from "../../Contexts/PostProvider";
import { IPost } from "../../Interfaces/Interface";
import Posts from "./Posts";

interface IProps {
  ReadMorePost: (post: IPost) => void;
}

const DisplayPosts = (props: IProps) => {
  const { ReadMorePost } = props;
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true)

  const { setPostsContext }: any = usePost();

  useEffect(() => {
    Config.get("posts").then((res) => {
      setPosts(res.data);
      setPostsContext(res.data);
      setLoading(false);
    });
  }, [setPostsContext]);

  return (
    <div>
      <Posts posts={posts} readMoreHandle={ReadMorePost} isLoading={loading}/>
    </div>
  );
};

export default DisplayPosts;
