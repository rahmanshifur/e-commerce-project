import { useStoreActions } from "easy-peasy"
import { useState } from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"


export default ({ editHandler }) => {
    const [name, setName] = useState('')

    const { create } = useStoreActions(action => action.size)

    const submitHandler = e => {
        e.preventDefault()

        create(name)
        setName('')
        editHandler()
    }
    return (
        <Form onSubmit={submitHandler} >
            <FormGroup className='d-flex'>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter size'
                    required
                />
                <Button type='submit'>Save</Button>
            </FormGroup>
        </Form>
    )
}