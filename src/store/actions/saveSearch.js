const actionType = "SAVE_SEARCH";

const action = text => {
    return {
      type: actionType,
      payload: text
    }
  }

// Thunk Action
function saveSearch(text) {
  return (dispatch) => {
    dispatch(action(text));
  };
}

export { actionType, saveSearch }
