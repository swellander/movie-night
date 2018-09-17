module.exports = io => {
  io.on('connection', socket => {
    console.log('new connection at', socket.id)
  })
}