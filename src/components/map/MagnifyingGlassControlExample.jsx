import React, { Component } from 'react';
import L from 'leaflet';
// import MagnifyingGlassControl from 'react-leaflet-magnifying-glass';
import MagnifyingGlassControl from '../../package/react-leaflet-magnifying-glass/index';


class MagnifyingGlassControlExample extends Component {
	render() {
		const options = {
			position: 'topleft',
			// forceSeparateButton: true,
			radius: 100,
			zoomOffset: 3
		};
		return (
			<MagnifyingGlassControl {...options} />
		);
	}
}

export default MagnifyingGlassControlExample;
