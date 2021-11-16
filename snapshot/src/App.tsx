import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";
import Header from "./components/Header/Header";
import Sample from "./components/Display/Sample";

const App = () => {
  const searchSubmit = (props: any, searchText: any) => {
    props.history.push(`/search/Gallery/${searchText}`);
  };

  return (
    <BrowserRouter>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ height: "100%", mt: "10rem" }}>
          <Route
            render={(props) => (
              <Header searchSubmit={searchSubmit} history={props} />
            )}
          ></Route>
          <Switch>
            <Route
              exact
              path={"/"}
              render={() => <Redirect to="/Gallery/sea" />}
            ></Route>
            <Route
              path={"/Gallery/sea"}
              render={() => <Sample searchText="sea" />}
            ></Route>
            <Route
              path={"/Gallery/sky"}
              render={(props) => <Sample props={props} searchText="sky" />}
            ></Route>
            <Route
              path={"/Gallery/sun"}
              render={(props) => <Sample props={props} searchText="sun" />}
            ></Route>
            <Route
              path={"/Gallery/mountain"}
              render={(props) => <Sample props={props} searchText="mountain" />}
            ></Route>
            <Route
              path={"/search/Gallery/:searchText"}
              render={(props) => (
                <Sample
                  props={props}
                  searchText={props.match.params.searchText}
                />
              )}
            ></Route>
          </Switch>
        </Box>
      </Container>
    </BrowserRouter>
  );
};

export default App;
