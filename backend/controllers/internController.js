var db = require('../models/intern.model');

// Create and Save a new Intern

module.exports = {
    createIntern : async (req,res)=>{
        try {
            const intern = await db.create({
                intername:req.body.intername,
                fathername:req.body.fathername,
                designation:req.body.designation,
                adharno:req.body.adharno,
                regNO:req.body.regNO,
                DOJ:req.body.DOJ,
                DOR:req.body.DOR
            })
            res.status(200).json({
                success:true,
                status:200,
                message: "intern created successfully",
                body:intern
            });
        } catch (error) {
            console.log("user not created",error)
        }
    },

    findIntern: async (req, res) => {
        try {
            const intern = await db.findOne({
                regNO:req.body.regNO
            });
    
            if (intern) {
                res.status(200).json({
                    success: true,
                    status: 200,
                    message: "intern found",
                    body: intern
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: "intern not found"
                });
            }
        } catch (error) {
            console.error("Error finding employee", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }
}