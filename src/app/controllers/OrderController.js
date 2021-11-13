import repository from '../repositories/OrdersRepository';

export default {
  async index(req, res) {
    const { userId } = req;

    const orders = await repository.findAllUserOrders(userId);

    res.status(200).json(orders);
  },

  async store(req, res) {
    const { product_id } = req.body;
    const { userId } = req;

    const order = await repository.create({ product_id, user_id: userId });

    res.status(201).json(order);
  },
};
