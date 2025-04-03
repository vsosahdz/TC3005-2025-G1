import express,{Request, Response} from 'express';
import AbstractController from '../controllers/AbstractController';

class Server{
    //Atributos de instancia
    private app: express.Application;
    private port: number;
    private env:string;

    //Método constructor
    constructor(appInit:{port:number; env:string; middlewares:any[]; controllers: AbstractController[]}){
        this.app = express();
        this.port = appInit.port;
        this.env = appInit.env;
        this.initMiddlewares(appInit.middlewares);
        this.initControllers(appInit.controllers);
    }

    private initMiddlewares(middlewares:any[]): void{
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    } 
    private initControllers(controllers: AbstractController[]): void{
        //   http://IP:PORT/ 
        this.app.get('/', (req: Request, res: Response) => {
            res.send('Server is working 🚀');
        })
        controllers.forEach(controller => {
            this.app.use(`/${controller.prefix}`, controller.router);
        });
    }

    public init(): void{
        this.app.listen(this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`);
        });
    }

}