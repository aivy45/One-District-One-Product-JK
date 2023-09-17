import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "OdopProducts",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "OdopUsers",
    },
    status: {
      type: String,
      default: "Not Processed",
      enum: ["Not Processed", "Processing", "Shipped", "Delivered", "Cancel"],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("OdopOrder", orderSchema);
