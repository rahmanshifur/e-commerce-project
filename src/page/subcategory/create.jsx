import { useStoreActions, useStoreState } from "easy-peasy"
import { useState } from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"


export default ({ editHandler }) => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [file, setFile] = useState('')

    const { create } = useStoreActions(action => action.subcategory)
    const { data } = useStoreState(state => state.category)

    const submitHandler = e => {
        e.preventDefault()

        create({
            name: name,
            category: category,
            file: file
        })

        setName('')
        setCategory('')
        setFile('')
        editHandler()
    }
    return (
        <Form onSubmit={submitHandler} >
            <div>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter name'
                    required
                />
            </div>
            <div>

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
            </div>
            <div>
                <Input
                    type='file'
                    onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
                    required
                />
                {file && <img src={file} alt='scatImg' height='100' />}
            </div>

            <Button type='submit'>Save</Button>
        </Form>
    )
}