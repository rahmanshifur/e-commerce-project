import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import store from '../../store';


const colorData = store.getState().color.data
const sizeData = store.getState().size.data
const tagData = store.getState().tag.data
const subcategoryData = store.getState().subcategory.data
const categoryData = store.getState().category.data


let initialState = {
    id: '',
    category: '',
    subcategory: '',
    title: '',
    price: '',
    minPrice: '',
    maxPrice: '',
    tag: '',
    color: '',
    size: '',
}


class Filter extends Component {

    state = initialState

    submitHandler = (e) => {
        e.preventDefault()
        let { id, category, subcategory, title, price, tag, size, color, minPrice, maxPrice } = this.state

        if (!id && !category && !subcategory && !title && !tag && !size && !color && !price && !minPrice && !maxPrice) {
            alert("please provide any text")
            return
        }

        let arr = { id, category, subcategory, title, price, tag, size, color, minPrice, maxPrice, subcategories: subcategoryData }
        store.getActions().product.filterData(arr)
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetHandler = () => {
        store.getActions().product.resetData()
        this.setState(initialState)
    }



    render() {
        let { id, category, subcategory, title, color, size, price, tag, minPrice, maxPrice } = this.state
        return (
            <Form onSubmit={this.submitHandler} className='d-flex justify-content-between'>
                <Input
                    type='text'
                    name='id'
                    value={id}
                    placeholder='Enter id'
                    onChange={this.changeHandler}
                />
                <select
                    name='category'
                    value={category}
                    onChange={this.changeHandler}
                >
                    <option value=''>Select Category</option>
                    {categoryData && categoryData.length > 0 && categoryData.map((item) =>
                        <option key={item.id} value={item.id}>{item.name}</option>
                    )}
                </select>

                <select
                    name='subcategory'
                    value={subcategory}
                    onChange={this.changeHandler}
                >
                    <option value=''>Select Subcategory</option>
                    {subcategoryData && subcategoryData.length > 0 && subcategoryData.map((item) =>
                        <option key={item.id} value={item.id}> {item.name}</option>
                    )}
                </select>

                <Input
                    type='text'
                    name='title'
                    value={title}
                    placeholder='Enter title'
                    onChange={this.changeHandler}
                />
                <Input
                    type='number'
                    name='price'
                    value={price}
                    placeholder='Enter price'
                    onChange={this.changeHandler}
                />
                <Input
                    type='number'
                    name='minPrice'
                    value={minPrice}
                    placeholder='min-Price'
                    onChange={this.changeHandler}
                />
                <Input
                    type='number'
                    name='maxPrice'
                    value={maxPrice}
                    placeholder='max-Price'
                    onChange={this.changeHandler}
                />

                <select
                    name='color'
                    value={color}
                    onChange={this.changeHandler}
                >
                    <option value=''>Select Color</option>
                    {colorData && colorData.length > 0 && colorData.map((item) =>
                        <option key={item.id} value={item.id}>{item.name}</option>
                    )}
                </select>


                <select
                    name='size'
                    value={size}
                    onChange={this.changeHandler}
                >
                    <option value=''>Select Size</option>
                    {sizeData && sizeData.length > 0 && sizeData.map((item) =>
                        <option key={item.id} value={item.id}>{item.name}</option>
                    )}
                </select>

                <select
                    name='tag'
                    value={tag}
                    onChange={this.changeHandler}
                >
                    <option value=''>Select Tag</option>
                    {tagData && tagData.length > 0 && tagData.map((item) =>
                        <option key={item.id} value={item.id}>{item.name}</option>
                    )}
                </select>

                <Button color='primary' className='mx-3' type='submit'>Filter</Button>
                <Button onClick={() => this.resetHandler()} type='button'>Reset</Button>
            </Form>
        );
    }
}

export default Filter;