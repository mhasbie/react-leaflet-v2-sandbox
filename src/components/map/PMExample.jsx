import '../../assets/css/leaflet.pm.css';
import React, { Component } from 'react';
import { Pane, GeoJSON } from 'react-leaflet';
import PM from '../../package/react-leaflet-pm/PM';
// import VectorGrid from '../../package/react-leaflet-vectorgrid/VectorGrid.Slicer';
// import VectorGrid from 'react-leaflet-vectorgrid';

const zon_klang = require('./zon_klang.json');
const zon_kajang = require('./zon_kajang.json');


class PMExample extends Component {
	render() {
		// const geojson = {
			
		// };
		const options = {
			// data: zon_kajang,
			position: 'topleft',
			drawPolygon: true,
			snappable: true,
			snapDistance: 20,
		};
		return (
			<Pane>
				<GeoJSON data={zon_klang} />
				<PM {...options} />
			</Pane>
		);
	}
}

export default PMExample;
