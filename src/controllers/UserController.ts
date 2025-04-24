import { Request,Response } from "express";
import AbstractController from "./AbstractController";
import User from "../modelsNOSQL/User";

class UserController extends AbstractController{
    //Singleton
    private static _instance: UserController;
    public static get instance(): UserController{
        return this._instance || (this._instance = new this("user"));
    }

    protected initRoutes(): void {
        this.router.post('/createUser',this.postCreateUser.bind(this));
        this.router.get('/listUsers',this.getListUsers.bind(this));
    }

    private async postCreateUser(req: Request, res: Response): Promise<void> {
        try{
            console.log(req.body);
            await User.UserManager.put(new User(req.body));
            res.status(201).json({message:'User created successfully'});
        }catch(err){        
            console.log(err);
            res.status(500).json({message:'Error creating the user'});
        }
    }

    private async getListUsers(req: Request, res: Response): Promise<void> {
        try{
            let users = (await User.UserManager.scan().run({return:"output"})).Items;
            res.status(200).json(users);
        }catch(err){
            console.log(err);
            res.status(500).json({message:'Error listing the users'});
        }
    }
}
export default UserController;
