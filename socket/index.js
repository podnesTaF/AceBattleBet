/** @format */

const io = require('socket.io')(4000, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
}

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on("addUser", userId => {
    addUser(userId, socket.id)
    io.emit("getUsers", users)
  })

  socket.on("addBet", ({team, sum}) => {
    io.emit("getBets", {
        team,
        sum
    })
  })

  socket.on("addDiffBet", ({teamId, type, agree, sum }) => {
    io.emit("getDiffBets", {
        teamId,
        type,
        agree,
        sum
    })
  })

  socket.on("disconnect", () => {
    console.log('User disconnected')
    users = users.filter(user => user.socketId !== socket.id)
    io.emit("getUsers", users)
  })
})