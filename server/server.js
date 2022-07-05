const express = require('express');
const cors = require('cors');
const { Socket } = require('socket.io-client');
const app = express();
app.use(cors());

active_rooms = {}

app.get('/chat/:room', (req, res) => {
    if ((req.params.room in active_rooms)) {
        res.send(active_rooms[req.params.room]);
    }
    else {
        res.send([]);
    }
});

io.on('connection', (socket, room, user) => {
    console.log(`User ${user} connected to room ${room}`);
    socket.on('message', (message) => {
        
        active_rooms[room].push({user: user, message: message});
    });
    socket.on('disconnect', () => {
        console.log(`User ${user} disconnected from room ${room}`);
    });
});
