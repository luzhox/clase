import express= require("express")
import{controlador as multicinesCtrl} from '../controladores/multicinesControlador'
const ruteador = express.Router()

ruteador.get("/",multicinesCtrl.listar)
ruteador.get("/formInsertar",multicinesCtrl.formulario)
ruteador.get("/formEditar/:id",multicinesCtrl.editar)
ruteador.get("/eliminar/:id",multicinesCtrl.eliminar)
ruteador.get("/:id",multicinesCtrl.detallar)
ruteador.post("/",multicinesCtrl.insertar)
ruteador.put("/:id",multicinesCtrl.actualizar)

export{ruteador}