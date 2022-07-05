import React from 'react'
import { AppBar, Box, Button, Paper, Toolbar, Typography } from "@material-ui/core";
import ChatIcon from "@mui/icons-material/Chat"

export default function Bar({ loggedIn, roomId, userId, logout }) {
  return (
    <Box mb={1}>
      <AppBar position={"fixed"}>
        <Toolbar >

          <ChatIcon fontSize={'large'} />

          <Typography variant="h4">
            Hello
          </Typography>

          {loggedIn &&
            <Box display={"flex"} flexGrow={1} flexDirection={"row"} justifyContent={"space-between"}>
              <Typography variant="h4">
                &nbsp;{userId}
              </Typography>
              <Typography variant="h4" elevation={1} style={{"marginLeft":"-10%"}}>
                Room: {roomId}
              </Typography>
              <Button variant="contained" onClick={logout}>
                <Typography variant="h6">
                  Logout
                </Typography>
              </Button>
            </Box>
          }
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  )
}
