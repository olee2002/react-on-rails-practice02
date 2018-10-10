import React, { Component } from 'react'
import axios from 'axios'

export default class EmployeeList extends Component {

    state = {
        employees: []
    }

    componentDidMount = () => {
        axios.get('/api/employees')
            .then(res => this.setState({ employees: res.data }))
    }

    render() {
        const { employees } = this.state
        return (
            <div className='container'>
                <h2>Employee List</h2>
                {employees.map(e =>
                    <div key={e.id}>
                        <div>Name:{e.name}</div>
                        <div>Position:{e.position}</div>
                        <div>Age:{e.age}</div>
                        <div>Email:{e.email}</div>
                        <button className='btn btn-primary'>Create</button>
                        <button className='btn btn-primary m-2'>Edit</button>
                        <button className='btn btn-danger'>Delete</button>
                        <hr />
                    </div>)
                }
            </div>
        )
    }
}
