import { redisClient } from "../../../app";

export function redisRepository(redisClient: redisClient) {
    const setCache = async ({
        key,
        expireTimeSec,
        data,
    }: {
        key: string,
        expireTimeSec: number,
        data: string,

    }) => await redisClient.setEx(key, expireTimeSec, data);

    return {
        setCache,
    }
}

export type redisRepository = typeof redisRepository;