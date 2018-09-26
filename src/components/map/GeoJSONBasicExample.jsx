import React, { Component } from 'react';
import { Pane, GeoJSON } from 'react-leaflet';

const ndcdb_lot = require('./ndcdb_lot_sample.json');


class GeoJSONBasicExample extends Component {
	render() {
		const style = {
			weight: 0.5,
			opacity: 1,
			color: '#ccc',
			fillColor: '#390870',
			fillOpacity: 0.6,
		};
		const onEachFeature = (feature, featureLayer) => {
			// console.log('feature', feature);
			// console.log('featureLayer', featureLayer);
			featureLayer.bindPopup(`<div>This is feature #${feature.properties.id}</div>`);
			featureLayer.bindTooltip(`Feature: #${feature.properties.id}`);
		};
		return (
			<Pane>
				<GeoJSON
					data={ndcdb_lot}
					style={style}
					onEachFeature={onEachFeature}
				/>
			</Pane>
		);
	}
}

export default GeoJSONBasicExample;
