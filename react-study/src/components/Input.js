import React, { Component } from 'react'

const Input = props => {
	return <input {...props}/>
}


export default class CustomizeInput extends Component {
	render() {
		const {value = '', ...otherProps} = this.props
		return (
			<div style={{padding: 10}}>
				
			<Input value={value} {...otherProps}/>
			</div>
		)
	}
}
