import React, { createContext, useContext, useState } from "react";
import { IPost } from "../Interfaces/Interface";

const PostContext = createContext<{}>({});
const SetPostContext = createContext({});

export default function PostProvider({children}:any) {
  const [postsContext, setPostsContext] = useState<IPost[]>([]);

  return (
    <PostContext.Provider value={{postsContext, setPostsContext}}>
      {/* <SetPostContext.Provider value={setPost}> */}
        {children}
      {/* </SetPostContext.Provider> */}
    </PostContext.Provider>
  );
}

export const usePost = () => {
  const postData = useContext(PostContext);
  return postData;
};

export const useSetPost = () => {
  const setPostData = useContext(SetPostContext);
  return setPostData;
};
