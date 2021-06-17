import React from 'react'
import ToDoLi from './ToDoLi.js'

const styles = {
    paragraph: {
        fontStyle: 'italic'
    },
    del: {

    }
}

export default class toDoForm extends React.Component {
    constructor(props) {
        super(props) // вызывает родительский конструктор
        this.state = {
            input: '',
            items: [],
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({input: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault(); // чтобы не обновлялась страница
        
        this.setState({
            input: this.state.input,
            items: [...this.state.items, this.state.input]
        });
    }

    

    render() {
        return (
            <div className="card">
                <form onSubmit={this.onSubmit} className="d-flex justify-content-center mt-4">
                    <input type="text" value={this.state.input} onChange={this.onChange}
                    className="border shadow-sm mx-2 p-2" placeholder="Введите заметку..."
                    />
                    <button type="submit" className="btn btn-secondary shadow-sm">Submit</button>
                </form>
                <p className="text-center pt-4" style={styles.paragraph}>{this.state.input}</p>

                <ul className="list-group">
                    {this.state.items.map((item, index) => {
                        return (
                            <ToDoLi item={item} index={index} />
                        )
                    })}
                </ul>
            </div>
        )
    }
}
