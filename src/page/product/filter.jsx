import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import store from '../../store';

class Filter extends Component {

    state = {
        id: '',
        scat: '',
        title: '',
        price: '',
        tag: ''
    }

    submitHandler = (e) => {
        e.preventDefault()
        let { id, scat, title, price, tag } = this.state

        if (!id && !scat && !title && !tag) {
            alert("please provide any text")
            return
        }

        let arr = { id, scat, title, price, tag }
        store.getActions().product.filterData(arr)

        // this.setState({
        //     id: '',
        //     scat: '',
        //     title: '',
        //     price: '',
        //     tags: ''
        // })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetHandler = () => {
        store.getActions().product.resetData()
        this.setState({
            id: '',
            scat: '',
            title: '',
            price: '',
            tag: ''
        })
    }



    render() {
        let { id, scat, title, price, tag } = this.state
        return (
            <Form onSubmit={this.submitHandler} className='d-flex justify-content-between'>
                <Input
                    type='text'
                    name='id'
                    value={id}
                    placeholder='Enter id'
                    onChange={this.changeHandler}
                />
                {/* <Input
                    type='text'
                    name='scat'
                    value={scat}
                    placeholder='Enter subcategory name'
                    onChange={this.changeHandler}
                /> */}
                <Input
                    type='text'
                    name='title'
                    value={title}
                    placeholder='Enter title'
                    onChange={this.changeHandler}
                />
                {/* <Input
                    type='text'
                    name='price'
                    value={price}
                    placeholder='Enter subcategory name'
                    onChange={this.changeHandler}
                /> */}
                <Input
                    type='text'
                    name='tag'
                    value={tag}
                    placeholder='Enter tag'
                    onChange={this.changeHandler}
                />
                <Button color='primary' className='mx-3' type='submit'>Filter</Button>
                <Button onClick={() => this.resetHandler()} type='button'>Reset</Button>
            </Form>
        );
    }
}

export default Filter;