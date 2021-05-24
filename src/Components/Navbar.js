import {
  AppBar,
  Avatar,
  Badge,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField
} from "@material-ui/core";
import React from "react";

import {
  Favorite,
  GTranslate,
  Person,
  Search,
  Store
} from "@material-ui/icons";

function Navbar() {
  return (
    <div>
      <AppBar position="fixed">
        <Container>
          <Grid container alignItems="center" justify="space-between">
            <Grid item xs={3}>
              <h3>App studio</h3>
            </Grid>
            <Grid item xs={4}>
              <TextField
                placeholder="Search box"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <Grid
                container
                alignItems="center"
                justify="flex-end"
                spacing={1}
              >
                <Grid item>
                  <Badge
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    overlap="circle"
                    badgeContent={3}
                    color="primary"
                  >
                    <Avatar>
                      <IconButton>
                        <Person />{" "}
                      </IconButton>{" "}
                    </Avatar>
                  </Badge>
                </Grid>
                {/* second */}
                <Grid item>
                  <Avatar>
                    <IconButton>
                      <GTranslate color="primary" />{" "}
                    </IconButton>
                  </Avatar>
                </Grid>
                {/* second */}
                <Grid item>
                  <Avatar>
                    <IconButton>
                      <Favorite />{" "}
                    </IconButton>{" "}
                  </Avatar>
                </Grid>
                {/* second */}
                <Grid item>
                  <Avatar>
                    <IconButton>
                      <Store />{" "}
                    </IconButton>{" "}
                  </Avatar>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
