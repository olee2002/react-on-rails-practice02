import React, { Component } from 'react'
import axios from 'axios'
import ChildForm from './ChildForm';

export default class Children extends Component {
    state = {
        edited: false,
        child: {},
        createChild: false
    }

    handleEdit = (e) => {
        this.setState({ edited: !this.state.edited, child: e })
    }
    handleCreate = () => {
        this.setState({ createChild: !this.state.createChild, child: {} })
    }

    render() {
        return (
            <div className='container'>
                {!this.props.children.length ? "No Children" :
                    <div>
                        <h2>Children List</h2>
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
                                        <button className='btn btn-danger ml-2' onClick={() => this.props.handleDelete(e.id)}>Delete</button>
                                    </td>
                                </tr>
                            )}
                        </table>
                    </div>
                }
                <button
                    className='btn btn-primary m-2'
                    onClick={this.handleCreate}>
                    create a child
                </button>
                {this.state.edited || this.state.createChild ?
                    <ChildForm
                        employeeId={this.props.id}
                        edited={this.state.edited}
                        handleCreate={this.handleCreate}
                        employee={this.props.employee}
                        child={this.state.child} />
                    : null}
            </div>
        )
    }
}
