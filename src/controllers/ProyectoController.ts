import { Request,Response } from "express";
import AbstractController from "./AbstractController";
import db from "../models";

class ProyectoController extends AbstractController{
    //Singleton
    private static _instance: ProyectoController;
    public static get instance(): ProyectoController{
        return this._instance || (this._instance = new this("proyecto"));
    }

    protected initRoutes(): void {
        this.router.post('/crearProyecto',this.postCrearProyecto.bind(this));
        this.router.get('/listarProyectos',this.getListarProyectos.bind(this));

    }

    private async postCrearProyecto(req: Request, res: Response): Promise<void> {
        try{
            console.log(req.body);
            await db["Projecto"].create(req.body);
            res.status(201).json({message:'Proyecto creado correctamente'});
        }catch(err){        
            console.log(err);
            res.status(500).json({message:'Error creando el proyecto'});
        }
    }

    private async getListarProyectos(req: Request, res: Response): Promise<void> {
        try{
            const proyectos = await db.Projecto.findAll();
            res.status(200).json(proyectos);
        }catch(err){
            console.log(err);
            res.status(500).json({message:'Error listando los proyectos'});
        }
    }
}