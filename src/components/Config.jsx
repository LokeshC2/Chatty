import {useState} from "react";
import {Box, Button, TextField} from "@mui/material";


export default function Config({setUserId, setRoomId, login}) {

  return (
    <>
      <Box sx={{
        display: "inline-flex",
        flexDirection: "column",
        width: "50%",
        minHeight: "50vh",
        ml: "25vw",
        mt: "25vh",
        justifyContent: "center"
      }}>
        <Box mb={1}>
          <TextField
            label="Room"
            type="text"
            id="room-id"
            variant="outlined"
            fullWidth
            onChange={(e) => setRoomId(e.target.value)}
          />
        </Box>
        <Box m={0} mb={1}>
          <TextField
            label="Username"
            type="text"
            id="user-id"
            variant="outlined"
            fullWidth
            onChange={(e) => setUserId(e.target.value)}/>
        </Box>
        <Button variant="contained" color="primary" onClick={()=>login()}>
          Join
        </Button>
      </Box>
    </>
  )
}