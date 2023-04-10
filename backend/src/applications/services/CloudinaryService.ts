import cloudinary from "../../frameworks/services/cloudinary";
import { CloudinaryReturn } from "../../frameworks/services/cloudinary";

export const CloudinaryServiceInterface = (service: CloudinaryReturn) => {
    const uploadImage = async (filePath: string) => {
        const url = await service.uploadImage(filePath)
        return url;
    }
    return {
        uploadImage,
    }
}

export type CloudinaryInterface = typeof CloudinaryServiceInterface;