import '../../assets/css/leaflet-measure.css';

import React, { Component } from 'react';
import MeasureControl from 'react-leaflet-measure';


class MeasureControlExample extends Component {
	render() {
		const measureOptions = {
			position: 'topright',
			primaryLengthUnit: 'meters',
			secondaryLengthUnit: 'kilometers',
			primaryAreaUnit: 'sqmeters',
			secondaryAreaUnit: 'acres',
			activeColor: '#db4a29',
			completedColor: '#9b2d14'
		};
		return (
			<MeasureControl {...measureOptions} />
		);
	}
}

export default MeasureControlExample;
