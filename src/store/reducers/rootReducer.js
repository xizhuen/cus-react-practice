import { actionType as saveSearchActionType } from "../actions/saveSearch";

const initialState = {
  searchHistory: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case saveSearchActionType: {
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload],
      };
    }
    default:
      return state;
  }
}
