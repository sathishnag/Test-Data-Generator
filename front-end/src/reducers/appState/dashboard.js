import { LOAD_USER_DATA } from "../../actions/DashBoard/types";

const INITIAL_STATE = {
    userData:""
}
export default(state=INITIAL_STATE,action) => {
  switch(action.type){
    case LOAD_USER_DATA:
      return {
                ...state,
                userData:action.payload
            }
    default:
        return state;
}
}