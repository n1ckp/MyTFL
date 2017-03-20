import React from 'react'
import { Text, ScrollView } from 'react-native';

import LineService from '../app/components/presentational/LineService'

import styles from './styles/MyTFL'

class MyTFL extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tflData: ''
    }
  }

  componentWillMount() {
    fetch('https://api.tfl.gov.uk/line/mode/tube,tflrail/status')
    .then(response => response.json())
    .then(data => {
      this.setState({tflData: data})
    })
  }

  renderTubeStatuses() {
    if (!this.state.tflData) {return null}
    return this.state.tflData.map((data, index) => {
      return (
        <LineService key={`data-${index}`} data={data} />
      )
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderTubeStatuses()}
      </ScrollView>
    );
  }
}

export default MyTFL
