import React, { Component } from 'react';
import { Pane, GeoJSON } from 'react-leaflet';
import BubbleLayer from '../../package/react-leaflet-bubble/BubbleLayer';
// import VectorGrid from '../../package/react-leaflet-vectorgrid/VectorGrid.Slicer';
// import VectorGrid from 'react-leaflet-vectorgrid';

const banjirPoint = require('./banjir.point.json');


class BubbleLayerExample extends Component {
	render() {
		
		return (
			<Pane style={{ zIndex: 401 }}>
				<BubbleLayer geojson={banjirPoint} />
			</Pane>
		);
	}
}

export default VectorGridExample;
