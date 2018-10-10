import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import EmployeeForm from './EmployeeForm'
import Children from './Children'

export default class EmployeeList extends Component {

    state = {
        employees: [],
        isNew: false,
        isEdited: false,
        employee: {},
        children: [],
        gotKids: false
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
        this.setState({ isNew: !this.state.isNew, employee: {} })
    }
    handleEdit = (employee) => {
        this.setState({ isEdited: !this.state.isEdited, employee })
    }

    handleChildren = (id) => {
        axios.get(`/api/employees/${id}/children`)
            .then(res => this.setState({ children: res.data, gotKids: true }))
    }
    handleKids = () => {
        this.setState({ gotKids: !this.state.gotKids })
    }

    render() {
        const { employees, employee, children, isNew, isEdited, gotKids } = this.state
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
                                <button className='btn btn-default ml-2' onClick={() => this.handleChildren(e.id)}>Show Kids</button>
                                <button className='btn btn-primary ml-2' onClick={() => this.handleEdit(e)}>Edit</button>
                                <button className='btn btn-danger ml-2' onClick={() => this.handleDelete(e.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </table>
                <button className='btn btn-primary' onClick={this.handleForm}>Create New Employees</button>

                {isNew || isEdited ? <EmployeeForm isEdited={isEdited} employee={employee} /> : null}
                {gotKids ? <div><Children children={children} />
                    <button className='btn btn-primary mt-2' onClick={this.handleKids}>Close Children List</button></div>
                    : null}

            </div>
        )
    }
}