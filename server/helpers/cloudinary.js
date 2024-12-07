const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dzcsgzt0f",
  api_key: "552691117937855",
  api_secret: "ePx_Tz7eP1P4zGNAmy0R9rZ3Ouw",
});

const storage = new multer.memoryStorage();

async function imageUploadUtils(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtils };
