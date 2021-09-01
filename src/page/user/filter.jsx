import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';
import store from '../../store'

class Filter extends Component {
    state = {
        id: '',
        name: '',
        email: '',
        address: '',
        contact: '',
        status: ''
    }

    submitHandler = e => {
        e.preventDefault()
        let { name, id, email, address, contact, status } = this.state

        if (!name && !id && !email && !address && !contact && !status) {
            alert("please provide any value")
            return
        }

        let obj = { name, id, email, address, contact, status }
        store.getActions().user.filterData(obj)

    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetHandler = () => {
        store.getActions().user.resetData()
        this.setState({
            id: '',
            name: '',
            email: '',
            address: '',
            contact: '',
            status: ''
        })
    }

    render() {
        let { id, name, email, address, contact, status } = this.state
        return (
            <Form onSubmit={this.submitHandler} className='d-flex justify-content-between'>
                <Input
                    type='text'
                    name='id'
                    value={id}
                    placeholder='Enter id'
                    onChange={this.changeHandler}
                />
                <Input
                    type='text'
                    name='name'
                    value={name}
                    placeholder='Enter name'
                    onChange={this.changeHandler}
                />
                <Input
                    type='email'
                    name='email'
                    value={email}
                    placeholder='Enter email'
                    onChange={this.changeHandler}
                />
                <Input
                    type='text'
                    name='address'
                    value={address}
                    placeholder='Enter address'
                    onChange={this.changeHandler}
                />
                <Input
                    type='number'
                    name='contact'
                    value={contact}
                    placeholder='Enter contact'
                    onChange={this.changeHandler}
                />
                <Input
                    type='select'
                    name='status'
                    value={status}
                    onChange={this.changeHandler}
                >
                    <option value=''>Select Status</option>
                    <option value={1}>Active</option>
                    <option value={0}>Inactive</option>
                </Input>
                <Button color='primary' className='mx-3' type='submit'>Filter</Button>
                <Button onClick={() => this.resetHandler()} type='button'>Reset</Button>
            </Form>
        )
    }
}

export default Filter;