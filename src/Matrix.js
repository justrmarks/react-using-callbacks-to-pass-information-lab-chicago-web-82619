import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {selectedColor: '#FFF'}
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getColor={this.passSelectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  handleColorSelection = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  passSelectedColor = () => {
    return this.state.selectedColor
  }

  render() {
    return (
      <div id="app">
        <ColorSelector handleColorSelection={this.handleColorSelection} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
