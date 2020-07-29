var express=require("express")
var router=express.Router();
router.use("/home",require("./home"))
router.use("/applicants",require("./applicants"))
router.use("/applicant_profile",require("./applicant_profile"))
router.use("/states",require("./states"))
router.use("/login",require("./login"))
router.use("/login_data_entry",require("./login_data_entry"))
router.use("/reports",require("./reports"))
router.use("/cat_report",require("./cat_report"))
router.use("/pending_reports",require("./pending_reports"))
router.use("/reg_application",require("./reg_application"))
router.use("/village_wise_imp",require("./village_wise_imp"))
router.use("/panchayat_wise_imp",require("./panchayat_wise_imp"))
module.exports=router;