const express = require("express")
const routes = express.Router()
const autehenticationUser = require("../middlewares/authentication")
// const{users} = require("../models")
const authorizationUser =require ("../middlewares/authorization")

const db = require("../db")
const UserContoller = require("../controllers/userController")



// routes.get("/movies",UserContoller.movies)


routes.post("/register",UserContoller.registerUser)

routes.post("/login",UserContoller.loginUser)

routes.get("/user", UserContoller.getAllData)

routes.get("/movies",UserContoller.movies)

routes.use(autehenticationUser)





routes.post("/movies/:id" ,UserContoller.bookmarkMovie)

routes.get("/movies/mybookmark" ,authorizationUser, UserContoller.myBookmark)



module.exports = routes 