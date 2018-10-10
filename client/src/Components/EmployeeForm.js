import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class EmployeeFormNew extends Component {

    state = {
        name: this.props.employee.name,
        position: this.props.employee.position,
        email: this.props.employee.email,
        age: this.props.employee.age
    }

    handleChange = name => e => {
        this.setState({ [name]: e.target.value })
    }

    handleSubmit = () => {
        const { name, position, email, age } = this.state
        const { isEdited, employee } = this.props
        const payload = { name, position, email, age }
        console.log(payload)
        isEdited ? axios.put(`/api/employees/${employee.id}`, payload)
            : axios.post('/api/employees', payload)
    }

    render() {
        const { name, position, email, age } = this.state
        return (
            <div className='container'>
                <h3>Create an employee</h3>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input value={name} onChange={this.handleChange('name')} />
                    </div>
                    <div>
                        <label>Position</label>
                        <input value={position} onChange={this.handleChange('position')} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input value={email} onChange={this.handleChange('email')} />
                    </div>
                    <div>
                        <label>Age</label>
                        <input value={age} onChange={this.handleChange('age')} />
                    </div>
                    <button className='btn btn-primary'>Sumit</button>
                </form>
            </div>
        )
    }
}
