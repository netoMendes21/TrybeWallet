const api = 'https://economia.awesomeapi.com.br/json/all';
export async function cotasApi() {
  const response = await fetch(api);
  const data = response.json();
  return Object.keys(data).filter((elemet) => elemet !== 'USDT');
}

export async function buscaApi() {
  const response = await fetch(api);
  const data = response.json();
  return data;
}
