import express from "express";
import Products from "../Model/product.model.js";

import {addProductSingle,getAllProduct,categoryItemHandler} from "../Controller/product.handler.js";

const router = express.Router();
router
.post("/",addProductSingle )
.get("/" ,getAllProduct)
.get("/item",categoryItemHandler)

export default router;