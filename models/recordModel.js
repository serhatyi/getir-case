var mongoose = require("mongoose");

var RecordSchema = new mongoose.Schema({
      key: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      createdAt : {
        type: Date,
        default: Date.now,
        required: true
      },
      counts : {
          type : [Number],
          required : true
      }
});
module.exports = mongoose.model("Records", RecordSchema);