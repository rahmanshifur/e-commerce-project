import { Button, Form, Input } from "reactstrap"
import { useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';


export default (props) => {
    const [comment, setComment] = useState('')
    const [star, setStar] = useState('')

    const authData = useStoreState(state => state.auth.data)
    const { create } = useStoreActions(action => action.userReview)

    // const submitHandler = e => {
    //     e.preventDefault()
    //     let obj = {
    //         comment: comment,
    //         star: star
    //     }
    //     create(obj)
    //     setComment('')
    //     setStar('')

    // }
    const submitHandler = e => {
        e.preventDefault()
        let obj = {
            comment: comment,
            star: star,
            userId: authData.id,
            pdtId: props.pdtId
        }
        create(obj)
        console.log(obj)
        setComment('')
        setStar('')

    }

    return (
        <Form onSubmit={submitHandler}>
            <div>
                <Input
                    type='textarea'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder='description'
                    required
                />
            </div>
            <div>
                <Input
                    type='select'
                    value={star}
                    onChange={(e) => setStar(e.target.value)}
                    placeholder='Enter number'
                    required
                >
                    <option value=''>Select Star</option>
                    <option value='1'>1 Star</option>
                    <option value='2'>2 Star</option>
                    <option value='3'>3 Star</option>
                    <option value='4'>4 Star</option>
                    <option value='5'>5 Star</option>
                </Input>
            </div>
            <Button type='submit'>Save</Button>
        </Form>
    )
}