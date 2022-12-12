const express =require('express')
const router = express.Router();
const Controller = require('../controllers/Controller')


router.get('/fichas', Controller.getall)
router.post('/save', Controller.post)
router.get('/ficha/:id', Controller.getId)
router.put('/modificar/:id', Controller.update)
router.delete('/delete/:id', Controller.delete)



module.exports = router;