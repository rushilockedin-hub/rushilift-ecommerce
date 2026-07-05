import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      productId: String,
      name: String,
      image: String,
      price: Number,
      quantity: Number,
      size: String,
    }
  ],
  totalAmount: { type: Number, required: true },
  address: {
    fullName: String,
    phone: String,
    street: String,
    city: String,
    state: String,
    pincode: String,
  },
  status: { type: String, default: 'Placed' },
}, { timestamps: true });
export default mongoose.model('Order', orderSchema);
