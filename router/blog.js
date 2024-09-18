// import express from "express";
import { Router } from "express";
import { getBlog, jp, viewBlog } from "../controllers/blog.js";
// const router = express.Router()
const router = Router();

router.get('/', getBlog);
router.get('/view', viewBlog);
router.get("/view/jg", jp)
export default router;
// module.exports = router;