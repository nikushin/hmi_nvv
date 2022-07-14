import Main from "./main";
import Memory from "./memory";

const reducer = (state, action) => {
  return {
    main: Main(state, action),
    memory: Memory(state, action),
  };
};

export default reducer;
