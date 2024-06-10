import express from 'express';
import { Connect } from './config/db_Connection';
import dotenv from 'dotenv'
import { Exam_Route } from './Routes/Exam_User_Route';
dotenv.config()

const Exam = express()
Exam.use(express.json())
Exam.use(express.urlencoded({extended:true}))

const port_number = process.env.PORT || 9000


Exam.set("view engine", "ejs")
Exam.set("views",__dirname + "/views")

Exam.use(express.static("public"))

Exam.use("/User",Exam_Route)

Exam.listen(port_number,() =>
{
    console.log(`Server Is Running On Port http://localhost:${port_number}`);
    Connect()
})