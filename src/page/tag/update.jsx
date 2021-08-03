import { useStoreActions } from "easy-peasy"
import { useState } from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"


export default ({ editItem }) => {
    const [name, setName] = useState(editItem.name)

    const { update } = useStoreActions(action => action.tag)

    const submitHandler = e => {
        e.preventDefault()

        update({
            name,
            id: editItem.id
        })
        setName('')
    }
    return (
        <Form onSubmit={submitHandler} >
            <FormGroup className='d-flex'>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter tag'
                    required
                />
                <Button type='submit'>Update</Button>
            </FormGroup>
        </Form>
    )
}