import { Request, Response } from "express";
import {Exam_User} from "../models/Exam_Models";
import alert from 'alert';

export const Get_Exam_User = async (req:Request,res:Response) =>
{
    let User_Get = await Exam_User.find()
    res.send(User_Get)
} 

export const Create_Exam_User= async (req:Request,res:Response) =>
{
    const {Email}:any = req.body

    const Find_Email:any = await Exam_User.findOne({Email:Email})

    if(Find_Email)
    {
        res.send({msg:'Email Alredy Exits'})
    }
    else
    {
        let Create_User = await Exam_User.create(req.body)
        res.send(Create_User)
    }    
}

export const Update_Exam_User = async (req:Request,res:Response) =>
{
    let {id}= req.params
    let Update_User = await Exam_User.findByIdAndUpdate(id,req.body)
    res.status(200).send({msg:'User Update SuccessFully...'})
}

export const Delete_Exam_User = async (req:Request,res:Response) =>
{
    let {id} = req.params
    let Delete_User = await Exam_User.findByIdAndDelete(id)
    res.status(200).send({msg:'User Delete SuccessFully...'})
}

export const Login_Exam = (req:Request,res:Response) =>
{
    res.render('login')
}
export const Signup_Exam = (req:Request,res:Response) =>
{
    res.render('signup')
}
export const Main_Page = (req:Request,res:Response) =>
{
    res.render('index')
}
export const Login = async (req:Request,res:Response) =>
{
    const {Username,Password} = req.body
    
    let Find:any = await Exam_User.findOne({Username:Username})
    if(!Find)
    {
        res.send({msg:'User Not Found...'})
    }
    else if(Find.Password !== Password)
    {
        res.send({msg:'Invalid Password...'})
    }
    else
    { 
        res.render('index')
    }
}    