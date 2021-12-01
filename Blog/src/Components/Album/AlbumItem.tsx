import { Box, Divider, Typography } from "@mui/material";
import { IAlbum } from "../../Interfaces/Interface";

const AlbumItem = (props: IAlbum | any) => {
  const { album } = props;
  return (
    <Box>
      <Box
        sx={{
          p: "1rem 0",
        }}
      >
        <Typography>{album.title}</Typography>
      </Box>
      <Divider />
    </Box>
  );
};

export default AlbumItem;
