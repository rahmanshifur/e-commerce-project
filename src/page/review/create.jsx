import { useStoreActions, useStoreState } from "easy-peasy"
import { useState } from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"


export default () => {

    const [name, setName] = useState('')
    const [star, setStar] = useState('')
    const [comment, setComment] = useState('')
    const [product_id, setProduct_id] = useState('')
    const [user_id, setUser_id] = useState('')

    const { create } = useStoreActions(action => action.review)
    const productData = useStoreState(state => state.product.data)
    const userData = useStoreState(state => state.user.data)

    const submitHandler = e => {
        e.preventDefault()

        create({
            name: name,
            product_id: product_id,
            user_id: user_id,
            comment: comment,
            star: star
        })

        setName('')
        setComment('')
        setStar('')
        setProduct_id('')
        setUser_id('')
    }
    return (
        <Form onSubmit={submitHandler} >
            <FormGroup className='d-flex'>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter name'
                    required
                />
                <Input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder='Provide comment'
                    required
                />
                <Input
                    type='number'
                    value={star}
                    onChange={(e) => setStar(e.target.value)}
                    placeholder='Enter number'
                    required
                />
                <select
                    value={user_id}
                    onChange={(e) => setUser_id(e.target.value)}
                    required
                >
                    <option value='0'>Select user</option>
                    {userData && userData.length > 0 && userData.map((item) =>
                        <option key={item.id} value={item.id}>{item.name}</option>)}
                </select>
                <select
                    value={product_id}
                    onChange={(e) => setProduct_id(e.target.value)}
                    required
                >
                    <option value='0'>Select Product</option>
                    {productData && productData.length > 0 && productData.map((item) =>
                        <option key={item.id} value={item.id}>{item.title}</option>)}
                </select>

                <Button type='submit'>Save</Button>
            </FormGroup>
        </Form>
    )
}