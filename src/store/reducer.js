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
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.SET_OPEN_WRITE_POST_MODAL:
      return {
        ...state,
        openWritePostModal: action.payload,
      };
  }
};

export default reducer;
