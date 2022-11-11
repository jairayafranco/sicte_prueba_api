import { Router } from "express";
import { getUserData, saveUserData } from "../services/services.js";

const routes = Router();

routes
    .get('/users', getUserData)
    .post('/saveUser', saveUserData)

export default routes;