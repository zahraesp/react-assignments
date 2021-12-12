import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { IArticle } from "../../Interfaces/Interface";
import { GetAll } from "../../State/Articles/ActionCreatores";
import ArticleItem from "./ArticleItem";

const Articles = () => {
  const dispatch = useDispatch();
  const { Article, Auth }: any = useSelector((state) => state);

  useEffect(() => {
    dispatch(GetAll());
  }, []);

  console.log("Get All Articles: ", Article.article);

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {!!Auth ? (
        Article.article.map((item: IArticle) => (
          <ArticleItem item={item} key={item.id} />
        ))
      ) : (
        <Navigate to={"/signin"} />
      )}
    </Container>
  );
};

export default Articles;
