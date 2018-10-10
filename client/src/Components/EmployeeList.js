import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import EmployeeForm from './EmployeeForm'

export default class EmployeeList extends Component {

    state = {
        employees: [],
        isNew: false,
        isEdited: false,
        employee: {}
    }

    componentDidMount = () => {
        axios.get('/api/employees')
            .then(res => this.setState({ employees: res.data }))
    }

    handleDelete = (id) => {
        axios.delete(`/api/employees/${id}`)
            .then(res => this.setState({ employees: res.data }))
    }

    handleForm = () => {
        this.setState({ isNew: !this.state.isNew })
    }
    handleEdit = (employee) => {
        this.setState({ isEdited: !this.state.isEdited, employee })
    }

    render() {
        const { employees, employee, isNew, isEdited } = this.state
        return (
            <div className='container'>
                <div>
                    <h2>Employee List</h2>
                </div>
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                    {employees.sort((a, b) => b.id > a.id).map(e =>
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.position}</td>
                            <td>{e.age}</td>
                            <td>{e.email}</td>
                            <td>
                                <button className='btn btn-primary ml-2' onClick={() => this.handleEdit(e)}>Edit</button>
                                <button className='btn btn-danger ml-2' onClick={() => this.handleDelete(e.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </table>
                <button className='btn btn-primary' onClick={this.handleForm}>Create New Employees</button>
                {isNew || isEdited ? <EmployeeForm isEdited={isEdited} employee={employee} /> : null}
            </div>
        )
    }
}