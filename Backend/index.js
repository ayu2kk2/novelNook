import express from "express"

import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import bookRoute from "./Route/book.route.js"
import userRoute from "./Route/user.route.js";
const app = express()

app.use(cors()) //cors is middleware
app.use(express.json())

dotenv.config();
const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI
// it is listening on PORT 4000, but is should run on 4001
// we use env then ( we installed it )
// it is important and sensitive info, there we keep it in another file (.env here)

// connect to mongoDB
try {
mongoose.connect(URI)
console.log("Connected to MongoDB")
} catch(error) {
console.log("Error :", error)
 }

 //defining routes
 app.use("/books",bookRoute)
 app.use("/user",userRoute)

app.listen(PORT,()=>{
    console.log(`Listening to the ${PORT}`)
})