/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
const initialState = 5;
const changeTheMul = (state = initialState, action) => {
  switch (action.type) {
    case "MUL":
      return state * 5;
    case "DIV":
      return state / 5;
    default:
      return state;
  }
};

export default changeTheMul;
