// ================ Action types ================ //

export const USERS_ME_REQUEST = 'app/user/USERS_ME_REQUEST';
export const USERS_ME_SUCCESS = 'app/user/USERS_ME_SUCCESS';
export const USERS_ME_ERROR = 'app/user/USERS_ME_ERROR';

export const CLEAR_CURRENT_USER = 'app/user/CLEAR_CURRENT_USER';

export const STRIPE_ACCOUNT_CREATE_REQUEST = 'app/user/STRIPE_ACCOUNT_CREATE_REQUEST';
export const STRIPE_ACCOUNT_CREATE_SUCCESS = 'app/user/STRIPE_ACCOUNT_CREATE_SUCCESS';
export const STRIPE_ACCOUNT_CREATE_ERROR = 'app/user/STRIPE_ACCOUNT_CREATE_ERROR';

// ================ Reducer ================ //

const initialState = {
  currentUser: null,
  usersMeError: null,
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case USERS_ME_REQUEST:
      return { ...state, usersMeError: null };
    case USERS_ME_SUCCESS:
      return { ...state, currentUser: payload };
    case USERS_ME_ERROR:
      // eslint-disable-next-line no-console
      console.error(payload);
      return { ...state, usersMeError: payload };

    case CLEAR_CURRENT_USER:
      return { ...state, currentUser: null, usersMeError: null };

    default:
      return state;
  }
}

// ================ Action creators ================ //

export const usersMeRequest = () => ({ type: USERS_ME_REQUEST });

export const usersMeSuccess = user => ({
  type: USERS_ME_SUCCESS,
  payload: user,
});

export const usersMeError = e => ({
  type: USERS_ME_ERROR,
  payload: e,
  error: true,
});

export const clearCurrentUser = () => ({ type: CLEAR_CURRENT_USER });

export const stripeAccountCreateRequest = () => ({ type: STRIPE_ACCOUNT_CREATE_REQUEST });

export const stripeAccountCreateSuccess = response => ({
  type: STRIPE_ACCOUNT_CREATE_SUCCESS,
  payload: response,
});

export const stripeAccountCreateError = e => ({
  type: STRIPE_ACCOUNT_CREATE_ERROR,
  payload: e,
  error: true,
});

// ================ Thunks ================ //

export const fetchCurrentUser = () =>
  (dispatch, getState, sdk) => {
    dispatch(usersMeRequest());
    const { isAuthenticated } = getState().Auth;

    if (!isAuthenticated) {
      // Ignore when not logged in, current user should be null
      return Promise.resolve({});
    }

    return sdk.users
      .me()
      .then(response => {
        dispatch(usersMeSuccess(response.data.data));
        return response;
      })
      .catch(e => {
        dispatch(usersMeError(e));
        throw e;
      });
  };

export const createStripeAccount = (bankAccountToken, country) =>
  (dispatch, getState, sdk) => {
    dispatch(stripeAccountCreateRequest());
    return sdk.users
      .createStripeAccount({ bankAccountToken, country })
      .then(response => {
        dispatch(stripeAccountCreateSuccess(response));
        return response;
      })
      .catch(e => {
        dispatch(stripeAccountCreateError(e));
        throw e;
      })
      .then(() => dispatch(fetchCurrentUser()));
  };