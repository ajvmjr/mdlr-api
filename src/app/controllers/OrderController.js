import repository from '../repositories/OrdersRepository';

export default {
  async index(req, res) {
    const { userId } = req;

    const orders = await repository.findAllUserOrders(userId);

    res.status(200).json(orders);
  },

  async store(req, res) {
    const { products } = req.body;
    const { userId } = req;

    const firstProduct = products[0];

    const order = await repository.create(
      { product_id: firstProduct.id, quantity: firstProduct.quantity, user_id: userId },
    );

    products.splice(0, 1);

    await products.forEach(async ({ id, quantity, category_id }) => {
      await repository.create({
        product_id: id, quantity, category_id, order_id: order.id, user_id: userId,
      });
    });

    res.sendStatus(201);
  },
};
