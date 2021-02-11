const dotenv = require("dotenv").config()
const express = require("express")

const app = express()
const port = process.env.PORT || 9000

app.use("/api/*", (_,res)=>{
    res.json({data:"The API LIVES!!"})
})

app.listen(port,() => {
console.log(`server is alive on port ${port}`)})

