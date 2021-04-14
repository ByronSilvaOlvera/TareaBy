const express = require("express")
const app = express()
const router = express.Router()
//const path = require('path');
require('dotenv').config();

//
app.use( express.json() );

const path = __dirname + "/views/"
const port = process.env.PORT

// DB
require('./database/config').dbConnection();


router.use(function (req, res, next) {
  console.log("/" + req.method)
  next()
})

router.get("/test", function (req, res) {
    res.send("Hello Leo!!!!!")
  })

app.use(express.static(path))

//app.use("/api/usuario", router)
app.use("/api/usuario", require('./router/usuario'))
app.use("/api/log", require('./router/auth'))
app.use("/api/task", require('./router/task'))

app.listen(port, function () {
  console.log("Example app listening on port 8092!")
})

