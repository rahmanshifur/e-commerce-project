import { Button, Table } from "reactstrap";
import { useStoreState } from 'easy-peasy';
import OrderItems from "./order-items";
import { useState } from "react";
import { dateTime } from "../../util/helper";
import FilterOrder from "./filter-order";




function CancelOrder() {
    const [isOpen, setIsOpen] = useState(false)
    const [pdtItem, setPdtItem] = useState("")

    const orderData = useStoreState(state => state.order.data)

    const modalHandler = (pdtItem) => {
        setIsOpen(true)
        setPdtItem(pdtItem)
    }



    const totalCal = (order) => {
        let total = 0;
        order.forEach(item => {
            total += item.price * item.quantity
        })
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
                    {orderData && orderData.length > 0 && orderData.map((item, i) => item.status === 'CANCEL' &&
                        <tr key={item.id}>
                            <td>{++i}</td>
                            <td>{item.orderId}</td>
                            <td>{item.pdtItem.length}</td>
                            <td>BDT{totalCal(item.pdtItem)}</td>
                            <td>{item.status}</td>
                            <td>{dateTime(item.createdAt)}</td>
                            <td>
                                <Button onClick={() => modalHandler(item.pdtItem)}>View</Button>
                            </td>
                        </tr>)}
                </tbody>
            </Table>
            {isOpen && <OrderItems pdtItem={pdtItem} toggle={() => setIsOpen(false)} />}
        </div>
    )
}

export default CancelOrder


