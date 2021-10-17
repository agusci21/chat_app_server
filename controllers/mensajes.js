const { response } = require('express')
const Mensaje = require('../models/mensaje')

const obtenerChat = async (req, resp) => {
  const miId = req.uid
  const mensajeDe = req.params.de

  const last100 = await Mensaje.find({
    $or: [
      { de: miId, para: mensajeDe },
      { de: mensajeDe, para: miId },
    ],
  })
    .sort({ createdAt: 'desc' })
    .limit(100)

  response.json({
    ok: true,
    msg: last100,
  })
}

module.exports = {
  obtenerChat,
}
