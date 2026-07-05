import Order from '../model/Order.js';
export const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, address } = req.body;
    const order = await Order.create({
      user: req.user.id,
      items,
      totalAmount,
      address,
    });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
