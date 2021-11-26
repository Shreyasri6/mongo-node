const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const houseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  isSanitized: Boolean,
  unit: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: Date,
    default: Date.now,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
  category: Array,
  location: Array,
});

houseSchema.pre("update", function () {
  this.set({ updatedAt: Date.now() });
});

const HouseModel = mongoose.model("House", houseSchema);
module.exports = HouseModel;

console.log("working")