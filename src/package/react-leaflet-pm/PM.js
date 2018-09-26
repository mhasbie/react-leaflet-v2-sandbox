import { MapControl } from 'react-leaflet';
import L, { geoJSON } from 'leaflet';
import 'leaflet.pm';
import _ from 'lodash';

export default class PM extends MapControl {
	createLeafletElement(props) {
		const { map, pane, layerContainer } = this.context;
		const { data, position, drawMarker, drawPolyline, drawRectangle, drawPolygon, drawCircle, cutPolygon, editMode, removalMode } = props;

		this._options = {
			position,
			drawMarker,
			drawPolyline,
			drawRectangle,
			drawPolygon,
			drawCircle,
			cutPolygon,
			editMode,
			removalMode
		};
		return map.pm;
	}

	componentDidMount() {
		const { map, layerContainer } = this.context;
		const { data } = this.props;
		const options = _.clone(this.props);
		delete options.data;
		// this.leafletElement.addTo(layerContainer);
		// this.leafletElement.addControls(this._options);
		// map.pm.addControls(this._options);
		if (_.isObject(data)) {
			const polygonLayer = L.geoJson(data).addTo(map);
			polygonLayer.pm.enable(options);
		}
		map.pm.addControls(options);
	}

	_propagateEvent(eventHandler, e) {
		if (!_.isFunction(eventHandler)) return;
		const featureId = this._getFeatureId(e.layer);
		const feature = this.getFeature(featureId);
		const event = _.clone(e);
		const mergedEvent = _.merge(event.target, { feature });
		eventHandler(event);
	}
}
