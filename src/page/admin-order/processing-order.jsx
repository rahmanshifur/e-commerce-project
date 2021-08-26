import { useStoreActions, useStoreState } from 'easy-peasy';
import { useState } from 'react';
import { Table, Button } from "reactstrap"
import OrderItems from './order-items'
import { dateTime } from '../../util/helper';
import FilterOrder from './filter-order';


function ProcessingOrder() {
    const [isOpen, setIsOpen] = useState(false)
    const [pdtItem, setPdtItem] = useState([])

    const orderData = useStoreState(state => state.order.data)
    const updateOrder = useStoreActions(action => action.order.update)


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

    const completeHandler = (orderId) => {
        let obj = {
            orderId: orderId,
            status: 'COMPLETE'
        }
        updateOrder(obj)
    }


    return (
        <div>
            <FilterOrder />
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Order ID</th>
                        <th>No Order Item</th>
                        <th>Order Amount</th>
                        <th>Order Status</th>
                        <th>Date & Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orderData && orderData.length > 0 && orderData.map((item, i) => item.status === "PROCESSING" &&

                        < tr key={item.id} >
                            <td>{++i}</td>
                            <td>{item.orderId}</td>
                            <td>{item.pdtItem.length}</td>
                            <td>BDT{totalCal(item.pdtItem)}</td>
                            <td>{item.status}</td>
                            <td>{dateTime(item.createdAt)}</td>
                            <td>
                                <Button color='success' onClick={() => completeHandler(item.orderId)} >Complete</Button>
                                <Button onClick={() => modalHandler(item.pdtItem)} >View</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            {isOpen && <OrderItems pdtItem={pdtItem} toggle={() => setIsOpen(false)} />}
        </div >
    )
}

export default ProcessingOrder
