import React, { Component } from 'react';
import Project from './Project';
import Baby from 'babyparse';
import './css/project.css';
import $ from 'jquery';

var ProjectPage = React.createClass({
	getInitialState(){
		return{projects:[]}
	},

	// When component mounts, get the data and set the state of "quotes"
	componentDidMount(){
		$.get('data/projectData.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({projects:parsed.data})
		}.bind(this));
	},
	render(){
		return(
			<div className="projectsPage">
				<h2 className="white-text">Some projects from Info 343</h2>
				<div>
					{this.state.projects.map(function(project, i){
						return(
							<Project key={'project-' + i}
								src={project.imgSrc}
								type={project.type}
								name={project.name}
								desc={project.desc}
								url={project.url}/>
						)
					})}
				</div>
			</div>
		);
	}
});

export default ProjectPage;