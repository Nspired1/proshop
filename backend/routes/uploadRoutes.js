import express from "express";
import multer from "multer";
const router = express.Router();
import path from "path";

// storage variable
// path.extname gets extension of filename and dot
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png /;
  // test is REGEX method which true if there is a match between the regular expression and the string str. Otherwise, false.
  const extensionName = filetypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = filetypes.test(file.mimetype);

  if (extensionName && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only.");
  }
}

// upload middleware
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

// route
router.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
