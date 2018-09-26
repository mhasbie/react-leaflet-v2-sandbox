import React, { Component } from 'react';
import PrintControl from 'react-leaflet-easyprint';

class PrintControlExample extends Component {
	render() {
		return (
			<div>
				<PrintControl ref={(ref) => { this.printControl = ref; }} position="topleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} />
				<PrintControl position="topleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} title="Export as PNG" exportOnly />
			</div>
		);
	}
}

export default PrintControlExample;
