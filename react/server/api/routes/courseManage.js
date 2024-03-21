import express from "express"
import {courseManage} from "../controllers/courseManage.js"

const router = express.Router()

router.get("/", courseManage)

export default router