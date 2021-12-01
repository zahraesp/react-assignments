import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";
import Album from "../../Components/Album/Album";
import Todos from "../../Components/Todos/Todos";

const Profile = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="My Todos" value="1" />
            <Tab label="My Alboum" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Todos />
        </TabPanel>
        <TabPanel value="2">
          <Album />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Profile;
