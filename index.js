/**
 * @format
 */

import {
	AppRegistry
} from 'react-native';
import App from './App';
import {
	name as appName
} from './app.json';
import React, {
	PureComponent
} from 'react';

export default class RnDemo extends PureComponent < {} > {

	render() {
		return (
			<App/>
		);
	}
}

//解除黄色警告
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => RnDemo);