const { crearUsuario, login, renewToken } = require('../controllers/auth')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')

const { getUsuarios } = require('../controllers/usuarios')
const { Router } = require('express')
const router = Router()

router.get('/', validarJWT, getUsuarios)

module.exports = router
