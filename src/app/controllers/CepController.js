import consultCep from '../services/cepConsult';

export default {
  async show(req, res) {
    const { cep } = req.query;

    const addressInfo = await consultCep(cep);

    res.status(200).json(addressInfo);
  },
};
