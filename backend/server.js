require("dotenv").config();
const express = require("express");
const app = express();
const mongoose=require('mongoose')
const wr = require("./routes/top");
// app.get('/',(req,res)=>{
// res.json({asd:"Asdf"})
// })
app.use(express.json());
app.use("/api/work", wr);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
 app.listen(process.env.PORT, () => {
      console.log("lisening");
    });
})
.catch((err)=>{
    console.log(err)
})
