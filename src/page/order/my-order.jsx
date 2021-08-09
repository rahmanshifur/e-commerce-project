import { Container, Row, Col, Button, Table } from "reactstrap";
import { useStoreState, useStoreActions } from 'easy-peasy';
import Sidebar from "../../components/layout/sidebar";
import OrderItem from './order-items';
import { useState } from 'react'

function MyOrder() {
    const [isOpen, setIsOpen] = useState(false)
    const [pdtItem, setPdtItem] = useState([])

    const orderData = useStoreState(state => state.order.data)


    const totalCal = (orderItem) => {
        let total = 0;
        orderItem.forEach(item => {
            total += item.price * item.quantity
        })
        return total
    }

    const modalHeader = (pdtItem) => {
        setPdtItem(pdtItem)
        setIsOpen(true)
    }

    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <Sidebar />
                </Col>
                <Col sm={9}>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Order ID</th>
                                <th>No of Order Item</th>
                                <th>Order Amount</th>
                                <th>Status</th>
                                <th>Date & Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderData && orderData.length > 0 && orderData.map((item, i) =>
                                <tr key={item.orderId}>
                                    <td>{++i}</td>
                                    <td>{item.orderId}</td>
                                    <td>{item.pdtItem.length}</td>
                                    <td>BDT{totalCal(item.pdtItem)}</td>
                                    <td>{item.status}</td>
                                    <td>{item.createdAt}</td>
                                    <td>
                                        <Button onClick={() => modalHeader(item.pdtItem)}>View</Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            {isOpen && <OrderItem pdtItem={pdtItem} toggle={() => setIsOpen(false)} />}
        </Container>
    )
}
export default MyOrder;