
const express=require("express")
const bodyParser = require("body-parser");
const dotenv=require("dotenv")

const companyRoute=require("./routes/company")

const app= express()

app.use(bodyParser.json());
dotenv.config()

app.use ("/company",companyRoute)
app.get("/", (req, res) => {
  res.send("hello");
});




const PORT=process.env.PORT || 3000
app.listen(PORT,console.log(`Server started running on port 3000`))


