import { Box, Typography, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react"

const message = {
  id: "001",
  sender: "Lox",
  content: "Heya",
  timestamp: "2020-01-01T00:00:00.000Z"
}

export default function Chat({userId, roomId}) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    console.log(`/api/chat/${roomId}`)
    fetch(`/api/chat/${roomId}`)
      .then(res => res.json())
      .then(data => {
        data = data.map( 
          d => { return { ...d, timestamp: new Date(d.timestamp) }} 
          );
        setMessages(data)
      })
  }, [userId, roomId])

  return (
    <>
      <Box display={"flex"} flexDirection="column" mb={1}>
        {messages.map(message => (
          <Card variant="outlined" elevation={1} sx={{margin:"1em"}}>
            <CardContent>
              <Typography variant="p">
                {message.content}
              </Typography>
            </CardContent>
            <Typography variant="p">
              <b style={{ "marginLeft": "1em", "marginRight": "1em" }}>{message.sender}</b>{message.timestamp.toLocaleDateString()}&nbsp;{message.timestamp.toLocaleTimeString()}
            </Typography>
          </Card>
        ))}
      </Box>
    </>
  );
};