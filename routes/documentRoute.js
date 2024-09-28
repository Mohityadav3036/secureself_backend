import express from 'express'
import { validateToken } from '../middlewares/validateTokenHandler.js';
import { documentImgResize, uploadPhoto } from '../middlewares/uploadImage.js';
import { uploadImages } from '../controllers/documentController.js';

const router = express.Router();

router.post('/upload-image',validateToken,uploadPhoto.array("images",1),documentImgResize,uploadImages);

export default router;