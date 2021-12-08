import { Router } from 'express';

import controller from '../app/controllers/CepController';

const cepRoutes = Router();

cepRoutes.get('/cep', controller.show);

export default cepRoutes;
