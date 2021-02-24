// Used for Image Profile
const multer = require("multer");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    let allowed_types = [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/webp",
        "jpg",
        "jpeg",
        "png",
        "webp",
    ];
    if (allowed_types.includes(file.mimetype)) {
        return cb(null, true);
    } else {
        cb(null, false);
    }
}



module.exports = multer({
    storage: storage,
    limits: 1000 * 1000 * 10,
    fileFilter: fileFilter,
})