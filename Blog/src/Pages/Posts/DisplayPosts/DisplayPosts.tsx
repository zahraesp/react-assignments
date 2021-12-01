import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Config from "../../../Api/Config";
import { IPost } from "../../../Interfaces/Interface";
import Posts from "./Posts";

const DisplayPosts = () => {
  const [fetchPosts, setFetchPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    try {
      const result = await Config.get("posts");
      setFetchPosts(result.data);
      setLoading(false);
      console.log("GET method:", result.data);
    } catch (error) {
      toast.error("Something Wrong!!");
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Posts fetchPosts={fetchPosts} isLoading={loading} />
    </div>
  );
};

export default DisplayPosts;
