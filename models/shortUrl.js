const mongoose = require("mongoose");
const shortId = require("shortid");

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  createdAt: { type: Date, expires: "10m", default: Date.now }, // expires in 30 seconds
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema);
