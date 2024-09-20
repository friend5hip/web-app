const data = {
  val: 10,
  text: "test",
};

const reducer = (state = data, action) => {
  console.log(state);

  if ((action.type = "up")) {
    return { ...state, val: state.val + action.payload };
  } else if ((action.type = "down")) {
    return { ...state, val: state.val - action.payload };
  }

  return state;
};

export default reducer;
