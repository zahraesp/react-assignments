import React, { createContext, useContext, useState } from "react";
import { IPost } from "../Interfaces/Interface";

const PostContext = createContext<{}>({});

export default function PostProvider({ children }: any) {
  const [postsContext, setPostsContext] = useState<IPost>();

  return (
    <PostContext.Provider value={{ postsContext, setPostsContext }}>
      {children}
    </PostContext.Provider>
  );
}

export const usePost = () => {
  const postData = useContext(PostContext);
  return postData;
};
