import { Request, Response, NextFunction } from "express"

interface iError extends Error {
    status?: number
}


const manejador = {

    noEncontrado: (req: Request, res: Response, next: NextFunction) => {
        const error: iError = new Error("Ruta no encontrada")
        error.status = 404
        next(error)
    },

    general: (error: iError, req: Request, res: Response, next: NextFunction) => {

        if (process.env.NODE_ENV === "development") {
            res.json({
                mensaje: error.message,
                estado: error.status,
                pila: error.stack
            })
        } else {
            res.json({
                mensaje: error.message,
                estado: error.status
            })

        }
    }

}

export { manejador }