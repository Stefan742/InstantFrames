import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
    cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
    api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "instantframes",
        format: async (req, file) => "jpg",
        public_id: (req, file) => `${Date.now()}-${file.originalname}`,
    },
});

const parser = multer({ storage });

export default async function handler(req, res) {
    if (req.method === "POST") {
        parser.single("file")(req, {}, async (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ url: req.file.path });
        });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};
