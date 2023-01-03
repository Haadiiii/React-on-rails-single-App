import axios from "axios";

const GREETINGS = "GREETINGS";

const init = [];

const reducer = (state = init, action) => {
  switch (action.type) {
    case GREETINGS:
      return action.greetings;
    default:
      return state;
  }
};

export default reducer;

export const getGreetings = async (dispatch) => {
  try {
    const { data } = await axios.get("/greetings");
    dispatch({ type: GREETINGS, greetings: data });
  } catch (ex) {
    console.log(ex);
  }
};
