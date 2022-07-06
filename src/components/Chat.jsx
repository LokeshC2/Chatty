import { Box, Typography, Card, CardHeader, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react"

const message = {
  id: "001",
  sender: "Lox",
  content: "Heya",
  timestamp: new Date("2020-01-01T00:00:00.000Z")
}
export default function Chat(userId, roomId) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    fetch(`/api/chat/${roomId}`)
      .then(res => res.json())
      .then(data => setMessages(data))
  }, [])

  return (
    <>
      <Box flexDirection="column-reverse" mb={1}>
        {messages.map(message => (
          <Card elevation={3}>
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