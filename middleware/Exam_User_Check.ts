import { NextFunction, Request, Response } from 'express';

export const Exam_User_Check = (req:Request,res:Response,next:NextFunction) =>
{
    const {Username,Password,Email}= req.body

    if(!Username || !Password || !Email)
    {
        res.status(400).send({msg:"Enter Valid Data..."})
    }
    else
    {
        next()
    }    
}    