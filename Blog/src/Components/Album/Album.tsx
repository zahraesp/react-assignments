import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Config from "../../Api/Config";
import { IAlbum } from "../../Interfaces/Interface";
import AlbumItem from "./AlbumItem";

const Album = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  let userIndex = "1";
  const item = window.localStorage.getItem("user");
  if (item !== null) {
    userIndex = JSON.parse(item).id;
  }

  useEffect(() => {
    async function getAlbum() {
      try {
        const result = await Config.get(`users/${parseInt(userIndex)}/todos`);
        setIsLoading(false);
        setAlbums(result.data);
        console.log("GET Todos:", result.data);
      } catch (error) {
        toast("Something Was Wrong!!");
      }
    }
    getAlbum();
  }, [userIndex]);

  return (
    <Box>
      {!!isLoading ? (
        <CircularProgress />
      ) : (
        <Box>
          {albums.map((album: IAlbum) => (
            <AlbumItem key={album.id} album={album} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Album;
