import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import store from '../../store'

class Create extends Component {
    state = {
        subcategory_id: '',
        title: '',
        price: '',
        vat: '',
        discount: '',
        description: '',
        colors: '',
        sizes: '',
        tags: ''

    }


    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submitHandler = e => {
        e.preventDefault()
        let { subcategory_id, title, price, vat, discount, description, colors, sizes, tags } = this.state

        let arr = { subcategory_id, title, price, vat, discount, description, colors, sizes, tags }
        store.getActions().product.create(arr)

        this.setState({
            subcategory_id: '',
            title: '',
            price: '',
            vat: '',
            discount: '',
            description: '',
            colors: '',
            sizes: '',
            tags: ''
        })
        alert('Product create successfully')
    }
    render() {
        let { subcategory_id, title, price, vat, discount, description, colors, sizes, tags } = this.state

        const colorData = store.getState().color.data
        const sizeData = store.getState().size.data
        const tagData = store.getState().tag.data
        const subcategoryData = store.getState().subcategory.data

        return (
            <Form onSubmit={this.submitHandler}>
                <FormGroup >
                    <Input
                        type='text'
                        name='title'
                        value={title}
                        placeholder='Enter title'
                        onChange={this.changeHandler}
                        required
                    />
                    <textarea
                        type='text'
                        name='description'
                        value={description}
                        placeholder='Enter description'
                        onChange={this.changeHandler}
                        required
                    />
                    <Input
                        type='number'
                        name='price'
                        value={price}
                        placeholder='Enter number'
                        onChange={this.changeHandler}
                        required
                    />
                    <Input
                        type='number'
                        name='vat'
                        value={vat}
                        placeholder='Enter vat'
                        onChange={this.changeHandler}
                        required
                    />
                    <Input
                        type='number'
                        name='discount'
                        value={discount}
                        placeholder='Enter discount'
                        onChange={this.changeHandler}
                        required
                    />
                    <select
                        name='colors'
                        value={colors}
                        onChange={this.changeHandler}
                        required
                    >
                        <option value='0'>Select Color</option>
                        {colorData && colorData.length > 0 && colorData.map((item) =>
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )}
                    </select>
                    <select
                        name='sizes'
                        value={sizes}
                        onChange={this.changeHandler}
                        required
                    >
                        <option value='0'>Select Size</option>
                        {sizeData && sizeData.length > 0 && sizeData.map((item) =>
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )}
                    </select>
                    <select
                        name='tags'
                        value={tags}
                        onChange={this.changeHandler}
                        required
                    >
                        <option value='0'>Select Tag</option>
                        {tagData && tagData.length > 0 && tagData.map((item) =>
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )}
                    </select>
                    <select
                        name='subcategory_id'
                        value={subcategory_id}
                        onChange={this.changeHandler}
                        required
                    >
                        <option value='0'>Select Subcategory</option>
                        {subcategoryData && subcategoryData.length > 0 && subcategoryData.map((item) =>
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )}
                    </select>
                    <Button type='submit'>Save</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default Create;