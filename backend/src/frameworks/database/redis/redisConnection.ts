import { createClient } from "redis";

const connection = () => {
  const createRedisClient = function createRedisClient() {
    const client = createClient();
    client.on('error', err => console.log('Redis Client Error', err));
    client.connect().then(()=>{
      console.log("Redis connected successfully")
    }).catch((err)=>{
      console.log(err)
    })
    return client
  };

  return {
    createRedisClient
  };
}
export default connection