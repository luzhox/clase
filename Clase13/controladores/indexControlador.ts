import  {Request, Response, NextFunction} from 'express'

const controlador={

    home:(req:Request, res:Response)=>{
        res.render("home")
    }

}

export{controlador}