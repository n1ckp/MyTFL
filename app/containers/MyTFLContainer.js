import { connect } from 'react-redux'

import { getLineStatusData } from '../actions'

import MyTFL from '../components/MyTFL'

const mapStateToProps = (state, ownProps) => {
  return {
    lineStatuses: state.tflData.lineStatuses,
    loading: state.tflData.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => dispatch(getLineStatusData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTFL);
