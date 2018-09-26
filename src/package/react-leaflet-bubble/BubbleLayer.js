import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import 'L.BubbleLayer';
import _ from 'lodash';

export default class BubbleLayer extends MapLayer {
	createLeafletElement(props) {
		const { geojson, property } = props;

		return L.bubbleLayer(geojson, { property });
	}

	componentDidMount() {
		const { layerContainer } = this.context;
		this.leafletElement.addTo(layerContainer);
	}
}
