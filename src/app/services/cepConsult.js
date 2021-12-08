import { consultarCep } from 'correios-brasil';

export default async function consultCep(cep) {
  const { logradouro, localidade, uf } = await consultarCep(cep);

  return {
    street: logradouro,
    city: localidade,
    state: uf,
    cep,
  };
}
