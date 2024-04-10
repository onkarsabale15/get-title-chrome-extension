const Express = require("express");
const app = Express();
const routes = require("./route/index")
const cors = require("cors")
const sequelize = require("./db")
const env = require("dotenv").config()
//middlewares
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cors({
    origin: "*",
    credentials: true
}))
app.use(routes.userRoutes)

app.get("/", (req, res) => {
    console.log("Got Git")
    res.status(200)
})

sequelize.sync({force:true}).then((res) => {
    // console.log(res)
    console.log("Connection has been established successfully.")
}).catch((err)=>{
    console.log("Unable to connect to the database:", err)
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})