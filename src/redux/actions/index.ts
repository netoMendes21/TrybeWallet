import { Dispatch } from 'redux';
import { DataUser, FormType } from '../../Type/types';
import { buscaApi, cotasApi } from '../../API/API';

export const USER = 'USER';
export const WALLET = 'WALLET';
export const CARTEIRA_API = 'CARTEIRA_API';
export const DELETE_BTN = 'DELETE_BTN';

export const actionUsuario = (payload: DataUser) => ({
  type: USER,
  payload,
});

export const actionCarteira = (payload: string[]) => ({
  type: WALLET,
  payload,

});

export const actionCarteiraApi = (payload: any) => ({
  type: CARTEIRA_API,
  payload,

});

export const dataApi = () => {
  return async (dispatch: Dispatch) => {
    const result = await cotasApi();
    dispatch(actionCarteira(result));
  };
};

export const actionApi = (formulario: FormType) => {
  return async (dispatch: Dispatch) => {
    const result = await buscaApi();
    const novaDespesa = { ...formulario, exchangeRates: result };
    dispatch(actionCarteiraApi(novaDespesa));
  };
};

export const actionBtnDelete = (id: number) => {
  return {
    type: DELETE_BTN,
    payload: id,
  };
};
