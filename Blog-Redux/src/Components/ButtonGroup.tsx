import { Button, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import { DeleteArticle, GetByUid } from "../State/Articles/ActionCreatores";
import EditModal from "./Modals/EditModal";

const ButtonGroup = (props: any) => {
  const { item } = props;
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log(item.id);
    dispatch(DeleteArticle(item));
    dispatch(GetByUid());
  };
  return (
    <CardActions>
      <EditModal item={item} />
      <Button size="small" onClick={handleDelete}>
        Delete
      </Button>
    </CardActions>
  );
};

export default ButtonGroup;
