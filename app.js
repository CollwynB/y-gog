const express = require("express")
const app = express()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use((req, res, next ) => {
//     res.header("Access-Control-Allow-Origin", "*")
//     next()
// })
app.post("/sendSubmission", (req, res) => {
    console.log(req.body)
    
})

app.use(express.static(__dirname + '/build'))



app.listen(3000, () => console.log("listening on https://localhost:3000"))