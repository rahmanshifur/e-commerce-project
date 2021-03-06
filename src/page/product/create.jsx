import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import store from '../../store'

class Create extends Component {
    state = {
        category_id: '',
        subcategory_id: '',
        title: '',
        price: '',
        vat: '',
        discount: '',
        description: '',
        colors: '',
        sizes: '',
        tags: '',
        file: '',
        files: []

    }


    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    fileChangeHandler = e => {
        this.setState({ file: URL.createObjectURL(e.target.files[0]) })
    }

    filesChangeHandler = e => {
        if (e.target.files.length === 0) {
            this.setState({ files: [] })
            return
        }

        let imgArr = []
        for (let i = 0; i < e.target.files.length; i++) {
            imgArr.push(URL.createObjectURL(e.target.files[i]))
        }
        this.setState({ files: imgArr })
    }


    submitHandler = e => {
        e.preventDefault()
        let { subcategory_id, title, price, vat, discount, description, colors, sizes, tags, file, files } = this.state

        let arr = { subcategory_id, title, price, vat, discount, description, colors, sizes, tags, file, files }
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
            tags: '',
            file: '',
            files: []
        })
        alert('Product create successfully')
        this.props.editHandler()
    }



    render() {
        let { category_id, subcategory_id, title, price, vat, discount, description, colors, sizes, tags, file, files } = this.state

        const colorData = store.getState().color.data
        const sizeData = store.getState().size.data
        const tagData = store.getState().tag.data
        const subcategoryData = store.getState().subcategory.data
        const categoryData = store.getState().category.data

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

                    <Input
                        type='number'
                        name='price'
                        value={price}
                        placeholder='Enter price'
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
                    <div>
                        <select
                            name='category_id'
                            value={category_id}
                            onChange={this.changeHandler}
                            required
                        >
                            <option value=''>Select Category</option>
                            {categoryData && categoryData.length > 0 && categoryData.map((item) =>
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )}
                        </select>
                    </div>
                    <div>

                        <select
                            name='subcategory_id'
                            value={subcategory_id}
                            onChange={this.changeHandler}
                            required
                        >
                            <option value=''>Select Subcategory</option>
                            {subcategoryData && subcategoryData.length > 0 && subcategoryData.map((item) => item.category === category_id &&
                                < option key={item.id} value={item.id} > {item.name}</option>
                            )}
                        </select>
                    </div>
                    <div>

                        <select
                            name='colors'
                            value={colors}
                            onChange={this.changeHandler}
                            required
                        >
                            <option value=''>Select Color</option>
                            {colorData && colorData.length > 0 && colorData.map((item) =>
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )}
                        </select>
                    </div>
                    <div>

                        <select
                            name='sizes'
                            value={sizes}
                            onChange={this.changeHandler}
                            required
                        >
                            <option value=''>Select Size</option>
                            {sizeData && sizeData.length > 0 && sizeData.map((item) =>
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )}
                        </select>
                    </div>
                    <div>

                        <select
                            name='tags'
                            value={tags}
                            onChange={this.changeHandler}
                            required
                        >
                            <option value=''>Select Tag</option>
                            {tagData && tagData.length > 0 && tagData.map((item) =>
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )}
                        </select>
                    </div>
                    <div>
                        <textarea
                            type='text'
                            name='description'
                            value={description}
                            placeholder='Enter description'
                            onChange={this.changeHandler}
                            required
                        />
                    </div>
                    <div>
                        <Input
                            type='file'
                            onChange={this.fileChangeHandler}
                            required
                        />
                        {file && <img src={file} alt='pdt' height='100' />}
                    </div>
                    <div>
                        <Input
                            type='file'

                            onChange={this.filesChangeHandler}
                            multiple
                        />
                        {files && files.length !== 0 && files.map(item => <img src={item} key={item} alt='pdt' height='50' width='50' />)}
                    </div>
                    <Button type='submit'>Save</Button>
                </FormGroup>
            </Form >
        );
    }
}

export default Create;