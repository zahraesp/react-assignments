import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AddArticle from "../Components/Modals/AddArticle";
import { GetByUid } from "../State/Articles/ActionCreatores";
import ArticleItem from "./Articles/ArticleItem";

const Profile = () => {
  const dispatch = useDispatch();
  const { Article, Auth }: any = useSelector((state) => state);
  useEffect(() => {
    dispatch(GetByUid());
  }, []);

  console.log("Get Articles By uid: ", Article.article);

  if (!Auth) {
    return <Navigate to="/SignIn"/>;
  }
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AddArticle />
      {Article.article.map((item: any) => (
        <ArticleItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Profile;
