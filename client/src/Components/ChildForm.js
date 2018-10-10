import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class ChildForm extends Component {

    state = {
        name: this.props.child.name,
        age: this.props.child.age
    }

    handleChange = name => e => {
        this.setState({ [name]: e.target.value })
    }

    handleSubmit = () => {
        const { name, age } = this.state
        const { employee, child, edited, employeeId } = this.props
        const payload = { name, age }
        console.log(payload, employee)
        edited ?
            axios.put(`/api/employees/${employeeId}/children/${child.id}`, payload)
            :
            axios.post(`/api/employees/${employeeId}/children`, payload)

    }

    render() {
        const { name, age } = this.state
        console.log(this.props.employee)
        return (
            <div className='container'>
                <h3>Update a child</h3>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input value={name} onChange={this.handleChange('name')} />
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
