const Router = require('express')
const router = new Router()
const controller = require('./authController.js')
const authMiddleware = require("./middleware/authMiddleware")
const roleMiddleware = require("./middleware/roleMiddleware")
const { check } = require('express-validator')

router.post('/registration', [
  check('username', "Имя пользователя не может быть пустым").notEmpty(),
  check('password', "Пароль должен быть больше 6 символов и меньше 12")
    .isLength({ min: 6, max: 12 }),
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['USER']), controller.getUsers)

module.exports = router