import { useStoreActions } from 'easy-peasy';
import { useState } from 'react';
import { Button, Input } from "reactstrap"

export default () => {

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const filterOrder = useStoreActions(action => action.order.filterOrder)
    const resetFilter = useStoreActions(action => action.order.resetFilter)

    const filterHandler = () => {
        if (!startDate || !endDate) {
            alert('Please select a valid start-date and end-date')
            return
        }
        filterOrder({ startDate, endDate })
    }

    const resetHandler = () => {
        setStartDate(null)
        setEndDate(null)
        resetFilter()

    }
    return (
        <div className='d-flex justify-content-between py-5'>
            <div>
                <Input
                    type='date'
                    value={startDate !== null && startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    max={endDate}
                />
            </div>
            <div>
                <Input
                    type='date'
                    value={endDate !== null && endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    min={startDate}
                />
            </div>
            <div>
                <Button className='btn-dark' onClick={() => filterHandler()}>Filter</Button>
                <Button className='btn-dark ms-3' onClick={() => resetHandler()}>Reset</Button>
            </div>
        </div>
    )
}