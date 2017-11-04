// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import React, {
	Component
} from 'react'

import ReactDOM from 'react-dom'
import './index.css'
class Input extends Component {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		value: ''
	// 	}
	// }
	handleInput(event) {
		// this.setState({
		// 	value: event.target.value
		// })
		if (this.props.changecontent) {
			// var value = (event.target.value * 100).toFixed(2).toString()
			this.props.changecontent(
					event.target.value
				)
				// this.setState({
				// 	value: ''
				// })
		}

	}
	render() {
		return (
			<div>
        <input type='number' onChange={this.handleInput.bind(this)}/>

      </div>
		)
	}
}

class PercentageShower extends Component {
	render() {
		return (
			<div>{this.props.value}</div>
		)
	}
}

class PercentageApp extends Component {
	constructor() {
		super()
		this.state = {
			values: ''
		}
	}
	changecontent(value) {
		if (!value) return
		this.setState({
			values: (value * 100).toFixed(2) + '%'
				// values: (Number(value) * 100).toFixed(2).toString() + '%'

		})
	}
	render() {
		return (
			<div>
      <Input changecontent={this.changecontent.bind(this)}/>
      <PercentageShower  value={this.state.values}/>
      </div>
		)
	}
}


ReactDOM.render(
	<PercentageApp/>,
	document.getElementById('root')
)