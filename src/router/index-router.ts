import { Router } from "express";
import personRouter from "./router";

const router = Router();

router.use(personRouter)

export default router;