import { useStoreActions } from "easy-peasy"
import { useEffect, useState } from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"


export default ({ editItem, editHandler }) => {
    const [name, setName] = useState()

    useEffect(() => {
        setName(editItem.name)
    }, [editItem.name])

    const { update } = useStoreActions(action => action.color)

    const submitHandler = e => {
        e.preventDefault()

        update({
            name,
            id: editItem.id
        })
        setName('')
        editHandler()
    }
    return (
        <Form onSubmit={submitHandler} >
            <FormGroup className='d-flex'>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter color'
                    required
                />
                <Button type='submit'>Update</Button>
            </FormGroup>
        </Form>
    )
}