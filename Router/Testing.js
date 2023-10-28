const express = require ("express")
const Demo = require("../Sample/Demo")
const Demo2 = require("../Sample/Demo2")
const Array = require("../Sample/Array")
const Arry2 = require("../Sample/Arry2")
const Destrary = require("../Sample/Destrary")

const router= express.Router()
router.route("/demo").get(Demo)
router.route("/hello").get(Demo2)
router.route("/array").get(Array)
router.route("/:age").get(Arry2)
router.route("/details/:name").get(Arry2)
router.route("/sample").post(Destrary)

module.exports=router