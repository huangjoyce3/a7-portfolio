import React from 'react';
//import Col from '../node-modules/react-materialize/lib/Col';
//import Row from '../node-modules/react-materialize/lib/Row';
import { Card, CardTitle,Col,Row } from 'react-materialize';
var Project = React.createClass({
	
    render() {
    	var base = 'http://students.washington.edu/jhuang3/info343/';
    	var imgBase= './img/';
        return (
        	<div className="flex-item box">
        	<a target="_blank" href={base+this.props.url}><Card  
        	header={<CardTitle image={imgBase+this.props.src}></CardTitle>}>
        	<h4 className="pink-text title">{this.props.name}</h4>
        	{this.props.desc}
        	</Card></a>
        	</div>
        )
    }
});

export default Project;