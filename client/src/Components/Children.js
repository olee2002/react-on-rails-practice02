import React, { Component } from 'react'

export default class Children extends Component {
    render() {
        return (
            <div className='container'>
                <div>
                    <h2>Children List</h2>
                </div>
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th></th>
                    </tr>
                    {this.props.children.sort((a, b) => b.id > a.id).map(e =>
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>
                                <button className='btn btn-primary ml-2' onClick={() => this.handleEdit(e)}>Edit</button>
                                <button className='btn btn-danger ml-2' onClick={() => this.handleDelete(e.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </table>
            </div>
        )
    }
}
