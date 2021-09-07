import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import store from '../../store'

class Create extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        contact: '',
        status: '',
        file: ''
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    filChangeHandler = e => {
        this.setState({ file: URL.createObjectURL(e.target.files[0]) })
    }

    submitHandler = e => {
        e.preventDefault()
        let { name, email, password, confirmPassword, address, contact, status, file } = this.state
        if (password !== confirmPassword) {
            alert(`ConfirmPassword doesn't match`)
            return
        }

        let arr = { name, email, password, address, contact, status, file }
        store.getActions().user.create(arr)

        this.setState({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            address: '',
            contact: '',
            file: ''
        })
        this.props.editHandler()
        alert('User create successfully')
    }

    render() {
        let { name, email, password, confirmPassword, address, contact, status, file } = this.state

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
                        required
                    >
                        <option value=''>Select Status</option>
                        <option value={1}>Active</option>
                        <option value={0}>Inactive</option>
                    </Input>
                    <div>
                        <Input
                            type='file'
                            onChange={this.fileChangeHandler}
                            required
                        />
                        {file && <img src={file} alt='pdt' height='100' />}
                    </div>
                    <Button type='submit'>Save</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default Create;










