import { connect } from 'react-redux'

import { getLineStatusData } from '../redux/actions'

import MyTFL from '../components/MyTFL'

const mapStateToProps = (state, ownProps) => {
  return {
    lineStatuses: state.tflData.lineStatuses,
    loading: state.tflData.loading,
    navigation: ownProps.navigation,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => dispatch(getLineStatusData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTFL);
