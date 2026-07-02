import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true,
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "Wanderlust",
        allowed_formats: ["jpeg", "png", "jpg" , "pdf"],
    },
});

export { cloudinary, storage };