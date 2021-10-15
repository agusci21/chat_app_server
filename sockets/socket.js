const { comprobarJWT } = require('../helpers/jwt')
const { io } = require('../index')
const {
  usuarioConectado,
  usuarioDesconectado,
} = require('../controllers/socket')

// Mensajes de Sockets
io.on('connection', (client) => {
  console.log('Cliente conectado')

  const [valido, uid] = comprobarJWT(client.handshake.headers['x-token'])

  console.log(valido, uid)

  //Verifica la autentificacion
  if (!valido) {
    return client.disconnect()
  }

  usuarioConectado(uid)

  client.on('disconnect', () => {
      usuarioDesconectado(uid)
    console.log('Cliente desconectado')
  })
})
