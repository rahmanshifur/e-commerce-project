import { useState } from "react"
import { useStoreActions, useStoreState } from "easy-peasy"
import { Button, Form, FormGroup, Input } from "reactstrap"


export default ({ editItem }) => {

    const [star, setStar] = useState(editItem.star)
    const [comment, setComment] = useState(editItem.comment)
    const [product_id, setProduct_id] = useState(editItem.product_id)
    const [user_id, setUser_id] = useState(editItem.user_id)

    const { update } = useStoreActions(action => action.review)
    const productData = useStoreState(state => state.product.data)
    const userData = useStoreState(state => state.user.data)

    const submitHandler = e => {
        e.preventDefault()

        update({
            product_id: product_id,
            user_id: user_id,
            comment: comment,
            star: star
        })

        setComment('')
        setStar('')
        setProduct_id('')
        setUser_id('')
    }
    return (
        <Form onSubmit={submitHandler} >
            <FormGroup className=''>

                <select
                    value={star}
                    onChange={(e) => setStar(e.target.value)}
                    placeholder='Enter number'
                    required
                >
                    <option value=''>Select Star</option>
                    <option value='1'>1*</option>
                    <option value='2'>2*</option>
                    <option value='2'>3*</option>
                    <option value='2'>4*</option>
                    <option value='2'>5*</option>

                </select>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder='description'
                    required
                />
                <select
                    value={user_id}
                    onChange={(e) => setUser_id(e.target.value)}
                    required
                >
                    <option value=''>Select user</option>
                    {userData && userData.length > 0 && userData.map((item) =>
                        <option key={item.id} value={item.id}>{item.name}</option>)}
                </select>
                <select
                    value={product_id}
                    onChange={(e) => setProduct_id(e.target.value)}
                    required
                >
                    <option value=''>Select Product</option>
                    {productData && productData.length > 0 && productData.map((item) =>
                        <option key={item.id} value={item.id}>{item.title}</option>)}
                </select>

                <Button type='submit'>Save</Button>
            </FormGroup>
        </Form>
    )
}