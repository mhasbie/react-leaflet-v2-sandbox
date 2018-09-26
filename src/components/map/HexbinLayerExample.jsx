import '../../assets/css/hexbin.css';

import React, { Component } from 'react';
// import { Pane, FeatureGroup } from 'react-leaflet';
// import Deflate from 'react-leaflet-deflate';

import { HexbinLayer } from '../../package/react-leaflet-d3/index';

// const banjirPoint = require('./banjir.point.json');
const banjirPoint = require('./banjir.point.dirty.json');

class HexbinLayerExample extends Component {

	render() {
		const options = {
			colorScaleExtent: [ 1, undefined ],
			radiusScaleExtent: [ 1, undefined ],
			colorRange: [ '#f7fbff', '#ff0000' ],
			radiusRange: [ 5, 12 ],
		};
		return (
			<HexbinLayer data={banjirPoint} {...options} />
		);
	}
}

export default HexbinLayerExample;
