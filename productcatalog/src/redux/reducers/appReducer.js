import { snacbar } from "../initials/appInitials";
import { CLOSE_SNACBAR, OPEN_SNACBAR } from "../actions/appActions";
const values = {
  snacbar,
};
export function appReducer(state = values, { type, payload }) {
  switch (type) {
    case OPEN_SNACBAR:
      return {
        ...state,
        snacbar:{
            open: true,
        message: payload.message,
        severity: payload.severity,
        }
        
      };
case CLOSE_SNACBAR:
    return{
        ...state,
snacbar:{
    open:false,
    message:""
}
    }
    default:
      return{
        ...state
      }
  }
}
