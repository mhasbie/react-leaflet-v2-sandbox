import React, { Component } from 'react';
import VectorGrid from './VectorGrid';

export default class VectorGrid.Slicer extends Component {
	render() {
		return <VectorGrid type="slicer" {...this.props} />
	}
}
