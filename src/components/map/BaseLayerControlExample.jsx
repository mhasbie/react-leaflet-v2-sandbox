import React, { Component } from 'react';
import { TileLayer, WMSTileLayer, LayersControl } from 'react-leaflet';

class BaseLayerControlExample extends Component {
	render() {
		return (
			<LayersControl position="topright">
				<LayersControl.BaseLayer name="OpenStreet Map" checked>
					<TileLayer
						attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				</LayersControl.BaseLayer>
				<LayersControl.BaseLayer name="ArcGIS World Topo Map">
					<TileLayer
						attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
						url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
					/>
				</LayersControl.BaseLayer>
				<LayersControl.BaseLayer name="TMSmartmap">
					<WMSTileLayer layers="Malaysia:TMSmartmap" format="image/png" transparent={false} url="https://geosmart.selangor.gov.my/geoserver/Malaysia/wms" attribution="Map data &copy;2017 TMSmartmap" />
				</LayersControl.BaseLayer>
			</LayersControl>
		);
	}
}

export default BaseLayerControlExample;
