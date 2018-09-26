import '../../assets/css/ping.css';

import React, { Component } from 'react';
// import { Pane, FeatureGroup } from 'react-leaflet';
// import Deflate from 'react-leaflet-deflate';

import { PingLayer } from '../../package/react-leaflet-d3/index';


class PingLayerExample extends Component {
	ping(coordinates) {
		this.pingLayer.ping(coordinates);
	}

	render() {
		return (
			<PingLayer ref={(ref) => { this.pingLayer = ref; }} radiusRange={[3, 50]} />
		);
	}
}

export default PingLayerExample;
