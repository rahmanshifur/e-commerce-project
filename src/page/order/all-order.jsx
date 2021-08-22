import { useStoreActions, useStoreState } from 'easy-peasy';
import { useState } from 'react';
import { Table, Button } from "reactstrap"
import OrderItems from './order-items'
import { dateTime } from '../../util/helper'

function AllOrder() {
    const [isOpen, setIsOpen] = useState(false)
    const [pdtItem, setPdtItem] = useState([])
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const orderData = useStoreState(state => state.order.data)
    const updateOrder = useStoreActions(action => action.order.update)
    const filterOrder = useStoreActions(action => action.order.filterOrder)
    const resetFilter = useStoreActions(action => action.order.resetFilter)


    const filterHandler = () => {
        if (!startDate || !endDate) {
            alert('Please select a valid start date and end date!')
            return
        }
        filterOrder({ startDate, endDate })
    }

    const resetHandler = () => {
        setStartDate(null)
        setEndDate(null)
        resetFilter()
    }


    const totalCal = (orderItem) => {
        let total = 0;
        orderItem.forEach(item => {
            total += item.price * item.quantity
        })
        return total
    }

    const modalHandler = (pdtItem) => {
        setIsOpen(true)
        setPdtItem(pdtItem)
    }

    const cancelHandler = (orderId) => {
        let obj = {
            orderId: orderId,
            status: 'CANCEL'
        }
        updateOrder(obj)
    }

    const completeHandler = (orderId) => {
        let obj = {
            orderId: orderId,
            status: 'COMPLETE'
        }
        updateOrder(obj)
    }

    return (
        <div>
            <div className="d-flex justify-content-between py-5">
                <div>
                    <input
                        type='date'
                        value={startDate !== null && startDate}
                        placeholder='Start Date'
                        onChange={(e) => setStartDate(e.target.value)}
                        max={endDate}
                    />
                </div>
                <div>
                    <input
                        type='date'
                        value={endDate !== null && endDate}
                        placeholder='End Date'
                        onChange={(e) => setEndDate(e.target.value)}
                        min={startDate}
                    />
                </div>
                <div>
                    <button className='btn btn-dark' onClick={() => filterHandler()}>Filter</button>
                    <button className='btn btn-dark ms-3' onClick={() => resetHandler()}>Reset</button>
                </div>
            </div>
            <Table>
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Order ID</th>
                        <th>No Order Item</th>
                        <th>Order Amount</th>
                        <th>Order Status</th>
                        <th>Date & Time</th>
                        <th >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orderData && orderData.length > 0 && orderData.map((item, i) =>

                        <tr key={item.id} className='text-center'>
                            <td>{++i}</td>
                            <td>{item.orderId}</td>
                            <td>{item.pdtItem.length}</td>
                            <td>BDT{totalCal(item.pdtItem)}</td>
                            <td>{item.status}</td>
                            <td>{dateTime(item.createdAt)}</td>
                            <td className='d-flex'>
                                {(item.status === 'ORDER' &&
                                    <>
                                        <Button style={{ marginRight: '10px' }} color='danger' onClick={() => cancelHandler(item.orderId)} >Cancel</Button>
                                    </>)}
                                <Button onClick={() => modalHandler(item.pdtItem)} >View</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            {isOpen && <OrderItems pdtItem={pdtItem} toggle={() => setIsOpen(false)} />}
        </div>
    )
}

export default AllOrder
