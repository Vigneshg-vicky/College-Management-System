import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config({ path: "./config.env" });

export default cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_KEY_SECRET
})

export const Cloudinary = () => {
    const uploadImage = async (filePath: string) => {
        const { url }: { url: string } = await cloudinary.uploader.upload(filePath)
        return url;
    }

    return {
        uploadImage,
    }
}

export type CloudinaryService = typeof Cloudinary;
export type CloudinaryReturn = ReturnType<CloudinaryService>