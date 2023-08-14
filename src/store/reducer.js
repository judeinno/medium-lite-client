import * as actionTypes from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_OPEN_LOGIN_MODAL:
      return {
        ...state,
        openLoginModal: action.payload,
      };
    case actionTypes.SET_OPEN_SIGNUP_MODAL:
      return {
        ...state,
        openSignupModal: action.payload,
      };
  }
};

export default reducer;
