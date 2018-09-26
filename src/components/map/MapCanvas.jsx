import '../../assets/css/leaflet.css';
import '../../assets/css/MarkerCluster.css';
import '../../assets/css/MarkerCluster.Default.css';

import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Pane } from 'react-leaflet';

// import DeflateExample from './DeflateExample';
// import MeasureControlExample from './MeasureControlExample';
// import PrintControlExample from './PrintControlExample';
// import MagnifyingGlassControlExample from './MagnifyingGlassControlExample';
// import BaseLayerControlExample from './BaseLayerControlExample';
// import PingLayerExample from './PingLayerExample';
// import HexbinLayerExample from './HexbinLayerExample';
// import GeoJSONBasicExample from './GeoJSONBasicExample';
import VectorGridExample from './VectorGridExample';
// import DialogExample from './DialogExample';
// import PMExample from './PMExample';

class MapCanvas extends Component {
	constructor(props) {
		super(props);
		this.toggleMap = () => this.setState({ showMap: !this.state.showMap });
		this.toggleHexbin = () => this.setState({ showHexbin: !this.state.showHexbin });
		this.ping = this.ping.bind(this);
		this.openDialog = this.openDialog.bind(this);
		this.closeDialog = this.closeDialog.bind(this);
		this.state = {
			showMap: true,
			showHexbin: true
		};
	}

	ping() {
		const someCoordinates = [
			[101.448205, 2.935403],
			[101.452839, 2.935961],
			[101.450479, 2.932746],
			[101.427943, 2.951690],
			[101.431891, 2.952804],
			[101.428801, 2.948518],
			[101.448765, 3.006379],
			[101.476918, 2.993179],
			[101.434346, 2.981693]
		];
		// const someCoordinates = [
			// [2.935403, 101.448205],
			// [2.935961, 101.452839],
			// [2.932746, 101.450479],
			// [2.951690, 101.427943],
			// [2.952804, 101.431891],
			// [2.948518, 101.428801],
			// [3.006379, 101.448765],
			// [2.993179, 101.476918],
			// [2.981693, 101.434346]
		// ];
		
		const random = Math.floor(Math.random() * someCoordinates.length);
		this.pingLayer.ping(someCoordinates[random]);
	}

	openDialog() {
		this.dialog.open();
	}

	closeDialog() {
		this.dialog.close();
	}
	
	render() {
		const { showMap, showHexbin } = this.state;

		L.Icon.Default.imagePath = '/images/markers/';
		return (
			<div style={{ width: '100%', height: '500px' }}>
				<button onClick={this.toggleMap}>Toggle Map</button>
				<button onClick={this.toggleHexbin}>Toggle Hexbin</button>
				<button onClick={this.ping}>Ping!</button>
				<button onClick={this.openDialog}>Open Dialog</button>
				<button onClick={this.closeDialog}>Close Dialog</button>
				
				{ showMap ? (
					<Map center={[2.935403, 101.448205]} zoom={10} minZoom={7} maxZoom={18} style={{ width: '100%', height: '600px' }}>
						
						<TileLayer
							attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						{/*
						<Pane>
							<DeflateExample />
						</Pane>
						<MeasureControlExample />
						<PrintControlExample />
						<MagnifyingGlassControlExample />
						<BaseLayerControlExample />
						<PingLayerExample ref={(ref) => { this.pingLayer = ref; }} />
						{ showHexbin ? <HexbinLayerExample /> : null }
						<GeoJSONBasicExample />
						
						<DialogExample ref={(ref) => { this.dialog = ref; }} />
						<PMExample />
						*/}
						<VectorGridExample />
					</Map>
				) : null }
			</div>
		);
	}
}

export default MapCanvas;
