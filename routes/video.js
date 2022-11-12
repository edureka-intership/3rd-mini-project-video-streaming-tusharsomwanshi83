const express = require('express')
const routes = express.Router()
const video = require('../controller/video')

routes.get('/',video.All)
routes.get('/shows',video.Shows)
routes.get('/shows/:id',video.ShowsId)
routes.get('/movies',video.Movies)
routes.get('/movies/:id',video.MoviesId)

module.exports=routes;