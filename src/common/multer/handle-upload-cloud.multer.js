import { CloudinaryStorage } from "multer-storage-cloudinary";

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
        format: async (req, file) => "png", // supports promises as well
        public_id: (req, file) => "computed-filename-using-request",
    },
});

export const upload = multer({ storage: storage });
