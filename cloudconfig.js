import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// ======================
// Cloudinary Configuration
// ======================
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

// ======================
// Multer Storage
// ======================
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "Wanderlust",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    resource_type: "image",
    public_id: `${Date.now()}-${file.originalname.split(".")[0]}`,
  }),
});

export { cloudinary, storage };