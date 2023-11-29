import { Request, Response, Router} from "express";
import UserController from "../controllers/UserController";


const UserRoutes = Router();

UserRoutes.get("/users", UserController.ListUsers);

UserRoutes.post("/users", function(req: Request, res: Response){
    res.send("Requisição POST de usuários");
});

UserRoutes.put("/users", function(req: Request, res: Response){
    res.send("Requisição PUT de usuários");
});

UserRoutes.delete("/users", function(req: Request, res: Response){
    res.send("Requisição DELETE de usuários");
});

export default UserRoutes;