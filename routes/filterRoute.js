const express = require('express');
const router = express.Router();
const RecordModel = require('../models/recordModel');
const validator = require("../middleware/validator");

router.get('/*',(req,res)=>{
  res.status(200).json({
    msg: 'Hello World',
  });
});

// Create the post method to retrieve filtered records from DB.
router.post('/filterRecord',validator.checkEmptyFilter,validator.checkTypeFilter,async (req,res,next)=>{
  try {
    const filteredRecords = await RecordModel.aggregate([
      {
        $addFields: {
          totalCount: {
            $sum: "$counts",
          },
        },
      },
      {
        $match: {
          createdAt: {
            $gte: new Date(Date.parse(req.body.startDate)),
            $lte: new Date(Date.parse(req.body.endDate)),
          },
          totalCount: {
            $gte: req.body.minCount,
            $lte: req.body.maxCount,
          },
        },
      },
      {
        $project: {
          _id: 0,
          key: 1,
          createdAt: 1,
          totalCount: 1,
        },
      }
    ]);

    res.status(200).json({
      code: 0,
      msg: "Success",
      records: filteredRecords,
    });
  } catch (error) {
     res.json({
        code: 1,
        msg: error.toString()
      })  
    }
});

module.exports = router;