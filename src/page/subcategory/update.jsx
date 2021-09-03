import { useStoreActions, useStoreState } from "easy-peasy"
import { useState, useEffect } from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"


export default ({ editItem, editHandler }) => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')

    useEffect(() => {
        setName(editItem.name)
        setCategory(editItem.category)
    }, [editItem.name])

    const { update } = useStoreActions(action => action.subcategory)
    const { data } = useStoreState(state => state.category)

    const submitHandler = e => {
        e.preventDefault()

        update({
            id: editItem.id,
            name: name,
            category: category
        })

        setName('')
        setCategory('')
        editHandler()
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
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder='Enter name'
                    required
                >
                    <option value=''>Select Category</option>
                    {data && data.length > 0 && data.map((item) =>
                        <option key={item.id} value={item.id}>{item.name}</option>)}

                </select>
                <Button type='submit'>Update</Button>
            </FormGroup>
        </Form>
    )
}