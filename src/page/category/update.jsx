import { useStoreActions } from "easy-peasy"
import { useState, useEffect } from "react"
import { Button, Form, Input } from "reactstrap"


export default ({ editItem, editHandler }) => {
    const [name, setName] = useState('')
    const [file, setFile] = useState('')

    useEffect(() => {
        setName(editItem.name)
        setFile(editItem.file)
    }, [editItem.name])

    const { update } = useStoreActions(action => action.category)

    const submitHandler = e => {
        e.preventDefault()

        update({
            name,
            file,
            id: editItem.id
        })
        setName('')
        editHandler()
    }
    return (
        <Form onSubmit={submitHandler} >
            <div>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter category name'
                    required
                />
            </div>

            <div>
                <Input
                    type='file'
                    onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
                    required
                />
                {file && <img src={file} alt='catImg' height='100' />}
            </div>
            <Button type='submit'>Update</Button>
        </Form>
    )
}