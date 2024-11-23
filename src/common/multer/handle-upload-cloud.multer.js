import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import pkg from 'cloudinary';
const { v2: cloudinary } = pkg;

// Configuration
cloudinary.config({
    cloud_name: "fuderrpham",
    api_key: "865592985827542",
    api_secret: process.env.CLOUDIARY_SECRET, // Click 'View API Keys' above to copy your API secret
});

// Upload an image
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "images",
    },
});

export const uploadCloud = multer({ storage: storage });
