import { firebaseRegister } from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'register',

  state: {
    status: undefined,
  },

  effects: {
    * submit({ payload }, { call, put }) {
      const response = yield call(firebaseRegister, payload);
      yield put({
        type: 'registerHandle',
        payload: response,
      });
    },
  },

  reducers: {
    registerHandle(state, { payload }) {
      setAuthority('user');
      reloadAuthorized();
      if (payload.user !== undefined) {
        return {
          isNewUser: true,
          message: 'User registered.'
        };
      }
      return {
        isNewUser: false,
        code: payload.code,
        message: payload.message,
      };
    },
  },
};
