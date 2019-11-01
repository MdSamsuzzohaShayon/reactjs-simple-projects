import React, { Component } from 'react'

export default class ProjectItem extends Component {
  render() {
    return (
      <li className="Project">
        {this.props.project.title} - {this.props.project.catagory}
      </li>
    )
  }
}
