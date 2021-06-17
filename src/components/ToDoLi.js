import React, { Component } from 'react'

export default class ToDoLi extends Component {
    constructor(props) {
        super(props) // вызывает родительский конструктор

    }
    render() {
        return (
            <li key={this.props.index} className="list-group-item list-group-item-dark text-center">{this.props.index + 1}: {this.props.item}</li>
        )
    }
}
