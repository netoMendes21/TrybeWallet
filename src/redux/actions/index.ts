type PayloadUsuario = {
  email: string,
  password: string,
};

type PayloadCarteira = {
  email: string,
  password: string,
};

export const USER = 'USER';
export const WALLET = 'WALLET';

export const actionUsuario = (payload: PayloadUsuario) => ({
  type: USER,
  payload,
});

export const actionCarteira = (payload: PayloadCarteira) => ({
  type: WALLET,
  payload,
});
