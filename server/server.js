const express = require("express")

const userRouter = require("./resources/users/users.router")
const app = express()

app.use("/apiusers", userRouter); 

app.listen(3001, () => console.log("Server is up and runninggg..."))