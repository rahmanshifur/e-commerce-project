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
        contact: ''
    }

    componentDidMount = e => {
        let { name, email, password, confirmPassword, address, contact } = this.props.editItem

        this.setState({
            name, email, password, confirmPassword, address, contact
        })
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        let { name, email, password, confirmPassword, address, contact } = this.state
        if (password !== confirmPassword) {
            alert(`ConfirmPassword doesn't match`)
        }

        let arr = { name, email, password, address, contact, id: this.props.editItem.id }
        store.getActions().user.update(arr)

        this.setState({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            address: '',
            contact: ''
        })
        alert('User Update successfully')
    }

    render() {
        let { name, email, password, confirmPassword, address, contact } = this.state

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

                    <Button type='submit'>Update</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default Update;










