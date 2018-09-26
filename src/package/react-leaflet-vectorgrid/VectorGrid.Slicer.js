import React, { Component } from 'react';
import VectorGrid from './VectorGrid';

const Slicer = (props) => new VectorGrid({ ...props, type: 'slicer' });

// export { Slicer };
const Grid = {
	Slicer
};

export default Grid;