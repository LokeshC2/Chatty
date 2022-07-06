const express = require('express');
const cors = require('cors');
const { Socket } = require('socket.io-client');
const app = express();
app.use(cors());

active_rooms = {
    "One":[
        {
            id:"001",
            content:"Hi...",
            sender: "Reen",
            timestamp: "2020-01-01T10:30:01.000Z"
        },{
            id:"002",
            content: "Says who!",
            sender: "Purp",
            timestamp: "2020-01-01T00:00:00.000Z"
        }
    ]
}

app.get('/api/chat/:room', (req, res) => {
    if ((req.params.room in active_rooms)) {
        res.send(active_rooms[req.params.room]);
    }
    else {
        res.send([]);
    }
});

// io.on('connection', (socket, room, user) => {
//     console.log(`User ${user} connected to room ${room}`);
//     socket.on('message', (message) => {
        
//         active_rooms[room].push({user: user, message: message});
//     });
//     socket.on('disconnect', () => {
//         console.log(`User ${user} disconnected from room ${room}`);
//     });
// })


app.listen(process.env.PORT || 3002, ()=>console.log("Server started"))