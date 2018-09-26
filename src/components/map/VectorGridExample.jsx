import React, { Component } from 'react';
import { Pane, GeoJSON, withLeaflet } from 'react-leaflet';
import VectorGrid from '../../package/react-leaflet-vectorgrid/VectorGrid';
// import VectorGrid from '../../package/react-leaflet-vectorgrid/VectorGrid.Slicer';
// import VectorGrid from 'react-leaflet-vectorgrid';
const WrappedVectorGrid = withLeaflet(VectorGrid);

const ndcdb_lot = require('./ndcdb_lot_sample.json');


class VectorGridExample extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
		this.state = {
			feature: null
		};
	}

	onClick(e) {
		const feature = e.target.feature;
		console.log('clicked', feature.properties);
		this.setState({ feature });
	}

	render() {
		const { feature = null } = this.state;
		const style = (properties) => ({
			weight: 0.5,
			opacity: 1,
			color: '#ccc',
			fillColor: properties.KELUASAN > 1000 ? '#0296cc' : '#d804c7',
			fillOpacity: 0.6,
			fill: true,
			stroke: true
		});
		const onEachFeature = (feature, featureLayer) => {
			featureLayer.bindPopup(`<div>This is feature #${feature.properties.id}</div>`);
			featureLayer.bindTooltip(`Feature: #${feature.properties.id}`);
		};
		return (
			<Pane style={{ zIndex: 401 }}>
				<WrappedVectorGrid
					data={ndcdb_lot}
					idField="OBJECTID"
					tooltip="LOT"
					popup={(layer) => `<div>${layer.properties.LOT}</div>`}
					style={style}
					hoverStyle={{
						fillColor: '#390870',
						fillOpacity: 1
					}}
					activeStyle={{
						fillColor: '#390870',
						fillOpacity: 1
					}}
					zIndex={401}
					onClick={this.onClick}
				/>
				{ feature ? (
					<GeoJSON
						key={feature.properties.OBJECTID}
						id={feature.properties.OBJECTID}
						data={feature}
						onEachFeature={onEachFeature}
					/>
				) : null }
			</Pane>
		);
	}
}

export default VectorGridExample;
