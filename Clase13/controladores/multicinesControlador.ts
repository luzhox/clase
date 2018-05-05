import  {Request, Response, NextFunction} from 'express'

import {multicinesModelo} from "../api/modelos/multicinesModelo"
const controlador={
    listar: async (req: Request, res: Response)=>{

        const registros = await multicinesModelo.find()
        .catch(error=>{
                console.log(error)
                 res.send("Ocurrio un error")
             })
        res.render("listadoMulticines",{registros})

        // multicinesModelo.find()
        // .then(registros=>{
        //     res.render("listadoMulticines",{registros})

        // })
        // .catch(error=>{
        //     console.log(error)
        //     res.send("Ocurrio un error")
        // })
    },

    formulario:(req:Request, res:Response)=>{
        res.render("editarMulticines",{titulo:"Insertar"})


    },

    insertar:(req:Request, res:Response)=>{
        console.log(req.body)
        const registro = new multicinesModelo(req.body)

        registro.save()
        .then(()=>{
            res.redirect("/multicines")
        })
        .catch(error =>{
            console.log(error)
            res.send(error)
        })
    },
    actualizar:(req:Request, res:Response)=>{
        multicinesModelo.findOneAndUpdate({_id: req.params.id},req.body)
            .then(()=>{
                res.redirect("/multicines/")
            })
            .catch(error =>{
                console.log(error)
                res.send(error)
            })
    },
    eliminar:(req:Request, res:Response)=>{
        multicinesModelo.findByIdAndRemove({_id:req.params.id})
        .then(()=>{
            res.redirect("/multicines/")
        })
        .catch(error =>{
            console.log(error)
            res.send(error)
        })
    },
    detallar:(req:Request, res:Response)=>{
        res.send("No Implementado")
    },
    editar:(req:Request, res:Response)=>{
        multicinesModelo.findOne({_id: req.params.id
        })
        .then(registro=>{
            res.render("editarMulticines",{titulo:"Editar",registro})
        })
        .catch(error =>{
            console.log(error)
            res.send(error)
        })
    }

}

export{controlador}