import { useState } from "react"
import { useStoreActions } from 'easy-peasy';


export default () => {
    const [name, setName] = useState('')
    const [id, setId] = useState('')


    const { filterData, resetData } = useStoreActions(action => action.category)

    const submitHandler = e => {
        e.preventDefault();
        if (!name && !id) {
            alert('Please provide id or name!')
            return;
        }
        filterData({ id, name })
    }

    const resetHandler = () => {
        setName('')
        setId('')
        resetData()
    }

    return (
        <form onSubmit={submitHandler} className="d-flex justify-content-between">
            <input
                type='text'
                value={id}
                placeholder='Enter id'
                onChange={(e) => setId(e.target.value)}
            />
            <input
                type='text'
                value={name}
                placeholder='Enter name'
                onChange={(e) => setName(e.target.value)}
            />
            <button className='btn btn-primary' type='submit'>Filter</button>
            <button className='btn btn-secondary' type='button' onClick={(e) => resetHandler()}>Reset</button>
        </form>
    )
}