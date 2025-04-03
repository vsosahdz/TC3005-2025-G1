import { Request,Response } from "express";
import AbstractController from "./AbstractController";
//Importar modelo

class EstudioController extends AbstractController {
    //Singleton
    //Atributos de clase
    private static _instance: EstudioController;

    public static get instance(): AbstractController {
        if (!EstudioController._instance) {
            EstudioController._instance = new EstudioController("estudio");
        }
        return EstudioController._instance;
    }

    //Declarar todas las rutas
    protected initRoutes(): void {
        this.router.get("/testEstudio",this.getTestEstudio.bind(this));
    }

    //Método de instancia
    public getTestEstudio(req: Request, res: Response): void {
        try{
            console.log("Test Estudio");
            res.status(200).send("<h1>Test Estudio</h1>");
        }catch(error:any){
            //Mensaje en la consola del backend
            console.error(error); 
            //Mensaje en el cliente
            res.status(500).json({error: error.message}); 
        }
    }    
}

export default EstudioController;