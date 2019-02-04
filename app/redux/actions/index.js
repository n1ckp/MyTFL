export const FETCHING_LINE_STATUS_DATA = 'FETCHING_LINE_STATUS_DATA'
export const RECEIVED_LINE_STATUS_DATA = 'RECEIVED_LINE_STATUS_DATA'

export const fetchingLineStatusData = () => {
  return {
    type: FETCHING_LINE_STATUS_DATA
  }
}

export const receivedLineStatusData = (data) => {
  return {
    type: RECEIVED_LINE_STATUS_DATA,
    data,
  }
}

export const getLineStatusData = () => {
  return function (dispatch) {
    dispatch(fetchingLineStatusData())
    return fetch('https://api.tfl.gov.uk/line/mode/tube,tflrail,dlr/status')
      .then(response => response.json())
      .then(data => {
        dispatch(receivedLineStatusData(data))
      })
  }
}
