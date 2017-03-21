import { FETCHING_LINE_STATUS_DATA, RECEIVED_LINE_STATUS_DATA } from '../actions';

const initialState = {
  loading: false,
  lineStatuses: null,
};

export default function tflData(state = initialState, action = {}) {
  switch (action.type) {
    case FETCHING_LINE_STATUS_DATA:
      return {
        ...state,
        loading: true,
      }
    case RECEIVED_LINE_STATUS_DATA:
      return {
        ...state,
        loading: false,
        lineStatuses: action.data
      }
    default:
      return state;
  }
}
