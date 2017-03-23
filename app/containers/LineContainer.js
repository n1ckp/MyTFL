import { connect } from 'react-redux'

import LineScreen from '../components/LineScreen'

const mapStateToProps = (state, ownProps) => {
  return {
    lineStatus: state.tflData.lineStatuses[ownProps.route.lineIndex]
  }
}

export default connect(mapStateToProps)(LineScreen);
