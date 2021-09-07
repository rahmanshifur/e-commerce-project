import { useStoreActions } from "easy-peasy"
import { useState } from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"


export default ({ editHandler }) => {
    const [name, setName] = useState('')
    const [file, setFile] = useState('')

    const { create } = useStoreActions(action => action.category)

    // const fileChangeHandler = e => {
    //     setFile(URL.createObjectURL(e.target.files[0]))
    // }

    const submitHandler = e => {
        e.preventDefault()

        create({ name, file })
        setName('')
        setFile('')
        editHandler()
    }
    return (
        <Form onSubmit={submitHandler}  >
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
                    // onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
                    required
                />
                {file && <img src={file} alt='catImg' height='100' />}
            </div>
            <Button type='submit'>Save</Button>
        </Form>
    )
}