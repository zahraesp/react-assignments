import { Card, CardContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ButtonGroup from "../../Components/ButtonGroup";

const ArticleItem = (props: any) => {
  const currentPath = useLocation().pathname;
  const { item } = props;
  useEffect(() => {}, []);
  return (
    <Card
      sx={{
        maxWidth: "75%",
        my: "1rem",
        width: "70%",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.body}
        </Typography>
      </CardContent>
      {currentPath === "/profile" && <ButtonGroup item={item} key={item.id} />}
    </Card>
  );
};

export default ArticleItem;
