import { ADD_TODO } from "../constants/todosTypes";
import { UPDATE_INPUT } from "../constants/inputTypes";

export default (state = "", action) => {
  const { type, payload } = action;
  switch (type) {
  case ADD_TODO:
    return "";
  case UPDATE_INPUT:
    return payload;
  default:
    return state;
  }
};
