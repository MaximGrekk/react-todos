import React, { Component } from 'react'

const styles = {
    deleteItem: {
        marginLeft: '25px',
        padding: '0px 7px 3px',
        border: '1px solid silver',
        borderRadius: '50%',
        cursor: 'pointer',
        backgroundColor: 'rgba(255, 0, 0, 0.4)',
        color: 'white'
    }
}

export default class ToDoLi extends Component {
    constructor(props) {
        super(props) // вызывает родительский конструктор

    }
    render() {
        return (
            <li className="list-group-item list-group-item-dark text-center">
                {this.props.index + 1}: {this.props.item} 

                <span style={styles.deleteItem} className="item-delete" onClick={() => this.props.onDelete(this.props.id)}>
                     &times;
                </span>

            </li>
        )
    }
}