import { Request, Response } from "express";
import { AdminDbInterface } from "../../applications/repositories/adminDbRepository";
import { AdminRepositoryMongoDB } from "../../frameworks/database/mongoDB/repository/adminRepositoryMongoDB";
import asyncHandler from 'express-async-handler';
import { cacheRepositoryInterface } from "../../applications/repositories/cacheRepositoryInterface";
import { redisRepository } from "../../frameworks/database/redis/setCache";
import { redisClient } from "../../app";
import authController from "./authControllers";

const AdminController = (AdminDbRepository: AdminDbInterface, adminDbRepositoryImpl: AdminRepositoryMongoDB, cacheRepositoryInterface: cacheRepositoryInterface, cacheRepositoryImpl: redisRepository, cacheClient: redisClient) => {
    const dbRepositoryAdmin = AdminDbRepository(adminDbRepositoryImpl());
    const cacheRepository = cacheRepositoryInterface(cacheRepositoryImpl(cacheClient));
    const getAdmin = asyncHandler(async (req:Request,res:Response) => {
        
    })
}

export default AdminController;