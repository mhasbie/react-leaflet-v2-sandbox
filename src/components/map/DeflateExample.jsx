import React, { Component } from 'react';
// import { Pane, FeatureGroup } from 'react-leaflet';
import Deflate from 'react-leaflet-deflate';
import L from 'leaflet';
// import Deflate from '../../package/react-leaflet-deflate/Deflate';


class DeflateExample extends Component {
	render() {
		const geojson = {
			"type": "FeatureCollection",
			"features": [
				{
					"type": "Feature",
					"properties": { id: 1 },
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[101.448205, 2.935403],
							[101.452839, 2.935961],
							[101.450479, 2.932746],
							[101.448205, 2.935403]
						]]
					},
				},
				{
					"type": "Feature",
					"properties": { id: 2 },
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[101.427943, 2.951690],
							[101.431891, 2.952804],
							[101.428801, 2.948518],
							[101.427943, 2.951690]
						]]
					}
				},
				{
					"type": "Feature",
					"properties": { id: 3 },
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[101.448765, 3.006379],
							[101.476918, 2.993179],
							[101.434346, 2.981693],
							[101.448765, 3.006379]
						]]
					}
				}
			]
		};
		const onEachFeature = (feature, featureLayer) => {
			featureLayer.bindPopup(`<div>This is feature #${feature.properties.id}</div>`);
			featureLayer.bindTooltip(`Feature: #${feature.properties.id}`);
		};
		return (
			<Deflate
				data={geojson}
				minSize={10}
				markerCluster={true}
				onEachFeature={onEachFeature}
			/>
		);
	}
}

export default DeflateExample;
