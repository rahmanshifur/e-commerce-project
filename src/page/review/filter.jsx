import { Button, Form, Input } from "reactstrap"
import { useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

export default () => {

    const [id, setId] = useState('')
    const [star, setStar] = useState('')
    const [user, setUser] = useState('')
    const [product, setProduct] = useState('')

    const productData = useStoreState(state => state.product.data)
    const userData = useStoreState(state => state.user.data)

    const { filterData, resetData } = useStoreActions(action => action.review)


    const submitHandler = (e) => {
        e.preventDefault()

        if (!id && !star && !user && !product) {
            alert('please provide a valid text')
            return
        }
        // let obj = {
        //     id: id,
        //     star: star,
        //     user: user,
        //     product: product
        // }
        filterData({ id, star, user, product })
    }

    const resetHandler = () => {
        setId('')
        setStar('')
        setUser('')
        setProduct('')
        resetData()
    }

    return (
        <Form onSubmit={submitHandler} className='d-flex justify-content-between py-5'>
            <div>

                <Input
                    type='text'
                    value={id}
                    placeholder='Enter Id'
                    onChange={(e) => setId(e.target.value)}
                />
            </div>
            <select
                value={star}
                onChange={(e) => setStar(e.target.value)}
            >
                <option value=''>Select Star</option>
                <option value='1'>1 Star</option>
                <option value='2'>2 Star</option>
                <option value='3'>3 Star</option>
                <option value='4'>4 Star</option>
                <option value='5'>5 Star</option>
            </select>
            <select
                value={user}
                onChange={(e) => setUser(e.target.value)}
            >
                <option value=''>Select user</option>
                {userData && userData.length > 0 && userData.map((item) =>
                    <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
            <select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
            >
                <option value=''>Select Product</option>
                {productData && productData.length > 0 && productData.map((item) =>
                    <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
            <Button className='btn-info mx-3' type='submit'>Filter</Button>
            <Button type='button' onClick={() => resetHandler()}>Reset</Button>
        </Form>
    )
}