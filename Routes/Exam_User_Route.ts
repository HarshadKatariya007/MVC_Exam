import { Router } from 'express';
import { Create_Exam_User, Delete_Exam_User, Get_Exam_User, Login, Login_Exam, Main_Page, Signup_Exam, Update_Exam_User } from '../controller/Exam_User_Controller';
import { Exam_User_Check } from '../middleware/Exam_User_Check';

export const Exam_Route = Router()

Exam_Route.get("/alluser",Get_Exam_User)
Exam_Route.get("/",Main_Page)
Exam_Route.get("/login",Login_Exam)
Exam_Route.get("/signup",Signup_Exam)
Exam_Route.post("/",Exam_User_Check,Create_Exam_User)
Exam_Route.post("/login",Login)
Exam_Route.patch("/update/:id",Update_Exam_User)
Exam_Route.delete("/delete/:id",Delete_Exam_User)