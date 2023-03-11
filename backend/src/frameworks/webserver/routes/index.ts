import { Application } from "express";
import adminRouter from './admin'
import studentRouter from "./students";
import facultyRouter from "./faculty";
import authRouter from "./auth";
import { redisClient } from "../../../app"

const routes = (app: Application, redisClient:redisClient) => {

    app.use('/api/v1/admin', adminRouter());
    app.use('/api/v1/student', studentRouter(redisClient));
    app.use('api/v1/faculty', facultyRouter(redisClient));
    app.use('/api/auth',authRouter());
}

export default routes