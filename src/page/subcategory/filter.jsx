import { Button, Form, Input } from "reactstrap"
import { useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

export default () => {
    const [id, setId] = useState('')
    const [catName, setCatName] = useState('')
    const [scatName, setScatName] = useState('')

    const { filterData, resetData } = useStoreActions(action => action.subcategory)
    const catData = useStoreState(state => state.category.data)

    const submitHandler = (e) => {
        e.preventDefault()
        if (!id && !catName && !scatName) {
            alert('Please provide id or category name or subcategory name!')
            return;
        }
        filterData({ id, catName, scatName })
    }

    const resetHandler = () => {
        setId('')
        setCatName('')
        setScatName('')
        resetData()
    }

    return (
        <Form onSubmit={submitHandler} className='d-flex justify-content-between py-5'>
            <Input
                type='text'
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter id"
            />
            <select
                value={catName}
                onChange={(e) => setCatName(e.target.value)}
                placeholder='Enter name'
            >
                <option value=''>Select Category</option>
                {catData && catData.length > 0 && catData.map((item) =>
                    <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
            <Input
                type='text'
                value={scatName}
                onChange={(e) => setScatName(e.target.value)}
                placeholder="Enter subcategory name"
            />
            <Button className='btn-info mx-3' type='submit' >Filter</Button>
            <Button className='btn-dark ' onClick={() => resetHandler()}>Reset</Button>
        </Form>
    )
}