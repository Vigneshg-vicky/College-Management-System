import { redisRepository } from "../../frameworks/database/redis/setCache";

export const cacheRepositoryInterface = (repository:ReturnType<redisRepository>) => {
    const setCache = async (catchingOptions:{
        key:string;
        expireTimeSec:number;
        data:string;
    }) => await repository.setCache(catchingOptions)

    return {
        setCache
    }
}

export type cacheRepositoryInterface = typeof cacheRepositoryInterface;