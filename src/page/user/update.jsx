import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import store from '../../store'

class Update extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        contact: '',
        status: ''
    }

    componentDidMount = e => {
        let { name, email, password, confirmPassword, address, contact, status } = this.props.editItem

        this.setState({
            name, email, password, confirmPassword, address, contact, status
        })

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.id !== nextProps.editItem.id) {
            return nextProps.editItem
        }
        return null
    }


    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        let { name, email, password, confirmPassword, address, contact, status } = this.state
        if (password !== confirmPassword) {
            alert(`ConfirmPassword doesn't match`)
        }

        let arr = { name, email, password, address, contact, status, id: this.props.editItem.id }
        store.getActions().user.update(arr)

        this.setState({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            address: '',
            contact: '',
        })
        this.props.editHandler()
        alert('User Update successfully')
    }

    render() {
        let { name, email, password, confirmPassword, address, contact, status } = this.state

        return (
            <Form onSubmit={this.submitHandler}>
                <FormGroup >
                    <Input
                        type='text'
                        name='name'
                        value={name}
                        placeholder='Enter name'
                        onChange={this.changeHandler}
                        required
                    />
                    <Input
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Enter email'
                        onChange={this.changeHandler}
                        required
                    />
                    <Input
                        type='password'
                        name='password'
                        value={password}
                        placeholder='Enter password'
                        onChange={this.changeHandler}
                        required
                    />
                    <Input
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        placeholder='Enter confirmPassword'
                        onChange={this.changeHandler}
                        required
                    />
                    <textarea
                        type='text'
                        name='address'
                        value={address}
                        placeholder='Enter address'
                        onChange={this.changeHandler}
                        required
                    />
                    <Input
                        type='number'
                        name='contact'
                        value={contact}
                        placeholder='Enter contact'
                        onChange={this.changeHandler}
                        required
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
                    <Button type='submit'>Update</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default Update;










