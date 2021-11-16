import { Box } from "@mui/system";
import React from "react";
import config from "../../api/config";

const Gallery = (props: any) => {
  const { searchText } = props;

  const [response, setResponse] = React.useState([]);

  React.useEffect(() => {
    const result = config
      .get("/search/photos", {
        params: { query: searchText, page: 1, per_page: 12 },
      })
      .then((res) => {
        console.log(res);
        setResponse(res.data.results);
      });
  }, [searchText]);

  console.log(response);

  return (
    <Box>
      {Object.keys(response).length > 0
        ? response.map((item: any) => (
            <Box
              sx={{
                display: "inline-block",
                width: "31%",
                height: "250px",
                m: "1%",
              }}
            >
              <img
                style={{ width: "100%", overflow: "hidden", height: "250px" }}
                key={item.id}
                src={`${item.urls.small}`}
                alt={searchText}
              />
            </Box>
          ))
        : null}
    </Box>
  );
};

export default Gallery;
