import fs from 'fs';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = './public/temp';
        fs.mkdirSync(dir, { recursive: true }); // Ensure directory exists
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

export const upload = multer({ storage });
