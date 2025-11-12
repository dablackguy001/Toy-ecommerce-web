import express from "express"
import { addToy, listToy,RemoveToy} from "../controllers/Toycontrollers.js"
import multer from "multer"


const toyRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
destination:"uploads",
filename:(req,file,cb)=>{

    return cb(null,`${Date.now()}${file.originalname}`)
}

})

const upload=multer({storage:storage})
toyRouter.post("/add", upload.array("images",4), addToy)
toyRouter.get("/list",listToy)
toyRouter.post("/remove",RemoveToy)

export default toyRouter