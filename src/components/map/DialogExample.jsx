import React, { Component } from 'react';
import Dialog from 'react-leaflet-dialog';

class DialogExample extends Component {
	open() {
		this.dialog.open();
	}

	close() {
		this.dialog.close();
	}

	render() {
		return (
			<div>
				<Dialog ref={(ref) => { this.dialog = ref; }} >
					<div>This is the dialog content.</div>
				</Dialog>
			</div>
		);
	}
}

export default DialogExample;
