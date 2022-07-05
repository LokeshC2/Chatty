import React, { useEffect, useState } from "react"
import Bar from "./components/Bar";
import Config from "./components/Config";
import Chat from "./components/Chat";

export default function App() {
  let storage = localStorage
  const [loggedIn, setLoginStatus] = useState(false)
  const [userId, setUserId] = useState(storage.getItem("userId"))
  const [roomId, setRoomId] = useState(storage.getItem("roomId"))

  useEffect(() => {
    if (userId && roomId) setLoginStatus(true)
  }, ["run once"])

  const login = () => {
    storage.setItem("userId", userId)
    storage.setItem("roomId", roomId)
    setLoginStatus(true)
  }

  const logout = () => {
    storage.removeItem("userId")
    storage.removeItem("roomId")
    setLoginStatus(false)
  }

  return (
    <>
      <Bar {...{ loggedIn, roomId, userId, logout }} />
      {(loggedIn)
        ? <Chat user={userId} room={roomId} />
        : <Config {...{ setUserId, setRoomId, login }} />}
    </>
  )
}